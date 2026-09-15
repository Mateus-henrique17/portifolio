import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [statusMessage, setStatusMessage] = useState({
    text: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nome.trim() ||
      !formData.email.trim() ||
      !formData.assunto ||
      !formData.mensagem.trim()
    ) {
      setStatusMessage({
        text: "Por favor, preencha todos os campos.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: "Enviando mensagem...", type: "" });

    const templateParams = {
      from_name: formData.nome,
      reply_to: formData.email,
      project_type: formData.assunto,
      message: formData.mensagem,
    };

    emailjs
      .send("service_2mlaesi", "template_3f6cgg8", templateParams, {
        publicKey: "3H0sFLYcrWNClVOPn",
      })
      .then(
        () => {
          setStatusMessage({
            text: "Mensagem enviada com sucesso! Em breve entrarei em contato.",
            type: "success",
          });
          setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Erro EmailJS:", error);
          setStatusMessage({
            text: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
            type: "error",
          });
          setLoading(false);
        },
      );
  };

  return (
    <section className={styles.contato} id="contato">
      <h2>Entre em contato</h2>
      <p className={styles.contatoSubtitulo}>
        Tem algum projeto em mente ou quer bater um papo? Deixe sua mensagem!
      </p>

      <form className={styles.formContato} onSubmit={handleSubmit}>
        <div className={styles.campo}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="assunto-toggle">Assunto:</label>

          <button
            id="assunto-toggle"
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setDropdownAberto(!dropdownAberto)}
          >
            <span>
              {formData.assunto
                ? formData.assunto === "Vaga"
                  ? "Contratação (CLT)"
                  : formData.assunto === "Freela"
                  ? "Projetos Freelance"
                  : formData.assunto === "Parcerias_duvidas"
                  ? "Parcerias ou dúvidas"
                  : formData.assunto
                : "Selecione o assunto:"}
            </span>
            <div className="chevrons">
              <i
                className={`fa-solid ${dropdownAberto ? "fa-chevron-up" : "fa-chevron-down"}`}
              ></i>
            </div>
          </button>

          {dropdownAberto && (
            <ul className={styles.options} id="options">
              <li className={styles.option}>
                <input
                  type="radio"
                  name="assunto"
                  id="assunto-vaga"
                  value="Vaga"
                  checked={formData.assunto === "Vaga"}
                  onChange={(e) => {
                    handleChange(e);
                    setDropdownAberto(false);
                  }}
                />
                <label htmlFor="assunto-vaga">Contratação (CLT)</label>
              </li>
              <li className={styles.option}>
                <input
                  type="radio"
                  name="assunto"
                  id="assunto-freela"
                  value="Freela"
                  checked={formData.assunto === "Freela"}
                  onChange={(e) => {
                    handleChange(e);
                    setDropdownAberto(false);
                  }}
                />
                <label htmlFor="assunto-freela">Projetos Freelance</label>
              </li>
              <li className={styles.option}>
                <input
                  type="radio"
                  name="assunto"
                  id="assunto-parcerias_duvidas"
                  value="Parcerias_duvidas"
                  checked={formData.assunto === "Parcerias_duvidas"}
                  onChange={(e) => {
                    handleChange(e);
                    setDropdownAberto(false);
                  }}
                />
                <label htmlFor="assunto-parcerias_duvidas">Parcerias ou dúvidas</label>
              </li>
              <li className={styles.option}>
                <input
                  type="radio"
                  name="assunto"
                  id="assunto-outros"
                  value="Outros"
                  checked={formData.assunto === "Outros"}
                  onChange={(e) => {
                    handleChange(e);
                    setDropdownAberto(false);
                  }}
                />
                <label htmlFor="assunto-outros">Outros</label>
              </li>
            </ul>
          )}
        </div>

        <div className={styles.campo}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Escreva sua mensagem aqui..."
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {statusMessage.text && (
          <p
            className={`${styles.statusMessage} ${styles[statusMessage.type] || ""}`}
          >
            {statusMessage.text}
          </p>
        )}

        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>
    </section>
  );
}
