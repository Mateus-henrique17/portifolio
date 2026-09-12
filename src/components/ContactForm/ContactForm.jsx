import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [statusMessage, setStatusMessage] = useState({
    text: '',
    type: '', // 'success' | 'error' | ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setStatusMessage({
        text: 'Por favor, preencha todos os campos.',
        type: 'error',
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: 'Enviando mensagem...', type: '' });

    // Configuração do EmailJS
    // Substitua os parâmetros abaixo pelas suas credenciais do EmailJS:
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams, 'PUBLIC_KEY')
    const templateParams = {
      from_name: formData.nome,
      reply_to: formData.email,
      message: formData.mensagem,
    };

    emailjs
      .send(
        'service_2mlaesi',   // Substitua pelo seu Service ID
        'template_3f6cgg8',  // Substitua pelo seu Template ID
        templateParams,
        '3H0sFLYcrWNClVOPn'    // Substitua pela sua Public Key
      )
      .then(
        () => {
          setStatusMessage({
            text: 'Mensagem enviada com sucesso! Em breve entrarei em contato.',
            type: 'success',
          });
          setFormData({ nome: '', email: '', mensagem: '' });
          setLoading(false);
        },
        (error) => {
          console.error('Erro EmailJS:', error);
          setStatusMessage({
            text: 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.',
            type: 'error',
          });
          setLoading(false);
        }
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
          <p className={`${styles.statusMessage} ${statusMessage.type}`}>
            {statusMessage.text}
          </p>
        )}

        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </form>
    </section>
  );
}