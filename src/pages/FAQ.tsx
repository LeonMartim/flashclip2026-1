import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Preciso ter conhecimento prévio em programação?",
    a: "Não! Todos os cursos do FlashClip são voltados para iniciantes. Começamos do zero e construímos o conhecimento passo a passo. A única exigência é sua curiosidade e vontade de aprender.",
  },
  {
    q: "Quanto custa a inscrição?",
    a: "As inscrições para o FlashClip são completamente gratuitas! Queremos tornar a educação em programação acessível a todos os estudantes.",
  },
  {
    q: "Preciso levar meu próprio notebook?",
    a: "Recomendamos trazer seu notebook para uma melhor experiência. No entanto, disponibilizamos computadores nos laboratórios para quem não puder levar.",
  },
  {
    q: "Quanto tempo dura o evento?",
    a: "O FlashClip acontece em um único dia, das 14h às 17h30, incluindo coffee-break. Cada curso tem duração total de 3 horas divididas em dois módulos.",
  },
  {
    q: "Receberei certificado?",
    a: "Sim! Todos os participantes que completarem o curso receberão um certificado digital por e-mail em até 7 dias após o evento.",
  },
  {
    q: "Posso fazer mais de um curso?",
    a: "Cada participante pode se inscrever em apenas um curso por edição do evento. Isso garante melhor aproveitamento e mais vagas para outros estudantes.",
  },
  {
    q: "Como funciona o coffee-break?",
    a: "Haverá um intervalo de 20 minutos durante o evento com café, lanches e bebidas. É uma ótima oportunidade para networking com outros participantes e instrutores.",
  },
  {
    q: "E se eu tiver que cancelar minha inscrição?",
    a: "Você pode cancelar sua inscrição até 24 horas antes do evento através do e-mail de confirmação. Assim liberamos a vaga para outro estudante na lista de espera.",
  },
  {
    q: "Há vagas limitadas?",
    a: "Sim, as vagas são limitadas para garantir qualidade no ensino e uma experiência mais personalizada. Recomendamos se inscrever o quanto antes.",
  },
  {
    q: "Posso trazer um amigo que não é aluno da Ulbra?",
    a: "O evento é aberto a todos os estudantes universitários, não apenas da Ulbra. Convidamos seu amigo a fazer a inscrição oficial para garantir sua vaga.",
  },
  {
    q: "Como escolho qual curso fazer?",
    a: "Na página de Cursos você encontra descrições detalhadas de cada opção. Se ainda tiver dúvidas, entre em contato conosco que te ajudaremos a escolher o melhor curso para você.",
  },
  {
    q: "Haverá outras edições do FlashClip?",
    a: "Sim! Planejamos realizar o FlashClip regularmente. Siga nossas redes sociais para não perder as próximas edições.",
  },
];

const FAQ = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto max-w-3xl">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="label-mono mb-3 opacity-60">// dúvidas frequentes</p>
        <h1 className="text-gradient mb-4">Perguntas Frequentes</h1>
        <p className="text-xl text-muted-foreground">
          Tire suas dúvidas sobre o FlashClip
        </p>
      </div>

      {/* Accordion */}
      <div className="card-cyber p-2 mb-6 animate-fade-up">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/5 last:border-0"
            >
              <AccordionTrigger
                className="
                  px-4 py-4 text-sm text-left font-medium
                  hover:text-primary transition-colors
                  [&[data-state=open]]:text-primary
                  [&[data-state=open]>svg]:text-primary
                "
              >
                <span className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan/40 mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pl-10 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div
        className="card-cyber p-8 text-center animate-fade-up"
        style={{ "--delay": "200ms" } as React.CSSProperties}
      >
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
          <MessageCircle className="text-primary" size={22} />
        </div>
        <h3 className="text-xl font-bold mb-3">Ainda tem dúvidas?</h3>
        <p className="text-muted-foreground mb-6">
          Nossa equipe está pronta para ajudar você
        </p>
        <Link to="/contato">
          <Button
            size="lg"
            className="glow-neon hover:glow-neon-strong font-mono uppercase tracking-wide text-sm transition-all hover:scale-105"
          >
            Entre em Contato
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default FAQ;
