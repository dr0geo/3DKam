import { DarkDiv } from '@/elements/Div';

const ContactForm = () => {
  return (
    <DarkDiv>
      <div>
        <h2>Et si nous discutions de votre projet ?</h2>
        <p>Camille Anquetin</p>
        <p>29 ans</p>
        <p>Française basée à Cork, en Irlande</p>
        <p>camilleanquetin@gmail.com</p>
        <p><a href='tel:+353896126361'>+353 (89) 612 63 61</a></p>
      </div>
      <form>
        <input type="text" placeholder="Nom et prénom *" required />
        <input type="email" placeholder="Email *" required />
        <input type="tel" placeholder="Téléphone" />
        <textarea minlength="20" placeholder="Ecrivez votre message ici *" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </DarkDiv>
  );
}

export default ContactForm;