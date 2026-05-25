import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  instituicao: string;
  curso_escolhido: string;
  confirm: boolean;
};

const COURSES = [
  "Go",
  "Julia",
  "C",
  "Kotlin",
  "Haskell",
  "Dart",
  "Lua",
  "Rust",
  "Swift",
  "TypeScript",
];

const Inscricao: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const onSubmit = async (data: FormData) => {
    if (loading) return;
    setLoading(true);
    setSuccessMsg(null);

    const payload = {
      nome: data.nome.trim(),
      email: data.email.trim().toLowerCase(),
      telefone: data.telefone.replace(/\D/g, ""),
      instituicao: data.instituicao.trim(),
      curso_escolhido: data.curso_escolhido,
    };

    const { error } = await supabase.from("inscricoes").insert(payload);

    setLoading(false);

    if (error) {
      const msg = String(error.message || error).toLowerCase();
      const isDuplicate = /unique|duplicate|already exists|23505/.test(msg);

      if (isDuplicate) {
        toast({
          title: "E-mail já cadastrado",
          description:
            "Este e-mail já está inscrito no FlashClip 2026. Caso precise alterar sua inscrição, entre em contato com o organizador: leon_martins@rede.ulbra.br",
        });
        return;
      }

      toast({
        title: "Erro ao registrar",
        description: "Ocorreu um erro ao processar sua inscrição. Tente novamente mais tarde.",
      });
      console.error("Supabase insert error:", error);
      return;
    }

    setSuccessMsg(
      `Sua inscrição para o minicurso de ${data.curso_escolhido} foi registrada com sucesso.`,
    );
    toast({ title: "Inscrição confirmada", description: "Sua inscrição foi recebida com sucesso." });
    reset();
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 relative z-10 flex items-center justify-center">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="card-cyber p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">FlashClip 2026 — Inscrições</h1>
            <p className="text-muted-foreground mb-4">
              Participe dos minicursos gratuitos na Copa da Tecnologia — sessões práticas e hands-on com
              instrutores experientes. Vagas limitadas por curso.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Data do evento: <strong>13/06/2026</strong></li>
              <li>• Duração dos minicursos: 3 horas</li>
              <li>• Inscrição: gratuita</li>
            </ul>
          </section>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-cyber p-8 md:p-10"
            noValidate
          >
            <h2 className="text-xl font-semibold mb-4">Realizar inscrição</h2>

            {successMsg ? (
              <div className="rounded-md bg-emerald-900/30 border border-emerald-700 p-4 mb-4">
                <p className="font-medium">{successMsg}</p>
                <p className="text-sm text-muted-foreground">Em breve você receberá um e-mail de confirmação.</p>
              </div>
            ) : null}

            <div className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm mb-1">
                  Nome completo
                </label>
                <Input
                  id="nome"
                  aria-invalid={errors.nome ? "true" : "false"}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                  className={errors.nome ? "border-destructive" : ""}
                  {...register("nome", {
                    required: "Nome é obrigatório",
                    validate: (value) => value.trim().length > 0 || "Nome é obrigatório",
                  })}
                  placeholder="Seu nome completo"
                />
                {errors.nome && (
                  <p id="nome-error" className="text-destructive text-sm mt-1">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "border-destructive" : ""}
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    validate: (value) => value.trim().length > 0 || "E-mail é obrigatório",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "E-mail inválido",
                    },
                  })}
                  placeholder="seu@exemplo.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm mb-1">
                  Telefone / WhatsApp
                </label>
                <Controller
                  control={control}
                  name="telefone"
                  rules={{
                    required: "Telefone é obrigatório",
                    validate: (value) => {
                      const digits = value.replace(/\D/g, "");
                      if (!digits) return "Telefone é obrigatório";
                      if (digits.length < 10) return "Telefone inválido";
                      return true;
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      id="telefone"
                      aria-invalid={errors.telefone ? "true" : "false"}
                      aria-describedby={errors.telefone ? "telefone-error" : undefined}
                      className={errors.telefone ? "border-destructive" : ""}
                      inputMode="numeric"
                      placeholder="(63) 99999-9999"
                      value={field.value || ""}
                      onChange={(event) => {
                        const formatted = formatPhone(event.target.value);
                        field.onChange(formatted);
                        setValue("telefone", formatted, { shouldValidate: true });
                      }}
                    />
                  )}
                />
                {errors.telefone && (
                  <p id="telefone-error" className="text-destructive text-sm mt-1">
                    {errors.telefone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="instituicao" className="block text-sm mb-1">
                  Instituição
                </label>
                <Input
                  id="instituicao"
                  aria-invalid={errors.instituicao ? "true" : "false"}
                  aria-describedby={errors.instituicao ? "instituicao-error" : undefined}
                  className={errors.instituicao ? "border-destructive" : ""}
                  {...register("instituicao", {
                    required: "Instituição é obrigatória",
                    validate: (value) => value.trim().length > 0 || "Instituição é obrigatória",
                  })}
                  placeholder="ULBRA, IFTO, Comunidade Externa"
                />
                {errors.instituicao && (
                  <p id="instituicao-error" className="text-destructive text-sm mt-1">
                    {errors.instituicao.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="curso_escolhido" className="block text-sm mb-1">
                  Curso escolhido
                </label>
                <Controller
                  control={control}
                  name="curso_escolhido"
                  rules={{ required: "Selecione um curso" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        id="curso_escolhido"
                        aria-invalid={errors.curso_escolhido ? "true" : "false"}
                        aria-describedby={errors.curso_escolhido ? "curso-error" : undefined}
                        className={errors.curso_escolhido ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Escolha um curso" />
                      </SelectTrigger>
                      <SelectContent>
                        {COURSES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.curso_escolhido && (
                  <p id="curso-error" className="text-destructive text-sm mt-1">
                    {errors.curso_escolhido.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <Controller
                  control={control}
                  name="confirm"
                  rules={{ required: "Você precisa confirmar os dados" }}
                  render={({ field }) => (
                    <Checkbox
                      id="confirm"
                      checked={!!field.value}
                      onCheckedChange={(v) => field.onChange(Boolean(v))}
                      aria-invalid={errors.confirm ? "true" : "false"}
                    />
                  )}
                />
                <label htmlFor="confirm" className="text-sm">
                  Confirmo que os dados informados estão corretos.
                </label>
              </div>
              {errors.confirm && (
                <p id="confirm-error" className="text-destructive text-sm mt-1">
                  {errors.confirm.message}
                </p>
              )}

              <div className="pt-4">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Enviando..." : "Realizar inscrição"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground/80 mt-2">
                Os dados informados serão utilizados exclusivamente para organização do FlashClip 2026.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscricao;