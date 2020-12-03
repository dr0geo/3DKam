import { DarkDiv } from '@/elements/Div';

const ContactForm = () => {
  const birthday = new Date('October 10, 1991');
  const age = Math.floor((Date.now() - birthday) / (1000 * 60 * 60 * 24 * 365));

  const handleClick = () => {
    const ad = 'camilleanquetin';
    const dom = 'gmail';
    const term = 'com';

    document.getElementById('ownEmail').setAttribute('value', `${ad}@${dom}.${term}`);
  }

  return (
    <DarkDiv>
      <div>
        <h2>Et si nous discutions de votre projet ?</h2>
        <p>Camille Anquetin</p>
        <p>{age} ans</p>
        <p>Française basée à Cork, en Irlande</p>
        <p><a href="tel:+353896126361">+353 89 612 63 61</a></p>
      </div>
      <form action="https://api.mailslurp.com/forms" method="post">
        <input id="ownEmail" type="hidden" name="_to" />
        <input type="hidden" name="_subject" value="Contact via le site 3DKam" />
        <input type="hidden" name="_redirectTo" value="https://3dkam.vercel.app/success" />
        <input type="text" name="Nom et prenom" placeholder="Nom et prénom *" required />
        <input type="email" name="E-mail" placeholder="Email *" required />
        <input type="tel" name="Telephone" placeholder="Téléphone" />
        <textarea name="Message" minLength="20" placeholder="Ecrivez votre message ici *" required></textarea>
        <button type="submit" onClick={handleClick}>Envoyer</button>
      </form>
    </DarkDiv>
  );
}

export default ContactForm;