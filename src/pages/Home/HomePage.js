const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
     
      backgroundImage:`url('https://images.pexels.com/photos/2469212/pexels-photo-2469212.jpeg')`,
      
    },
    title: {
      fontWeight: 400,
      fontSize: 120,
      textAlign: 'center',
      color: '#fff',
      textShadow: '1px 1px 2px black',
    },
    text: {
      fontWeight: 400,
      fontSize: 36,
      textAlign: 'center',
      color: '#d9ed92',
      textShadow: '6px 6px 12px black',
    }
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Move Ease 
        </h1>
        <p style={styles.text}> Орендоване авто – це ключ до швидкого та легкого пересування між міськими районами, дозволяючи тобі ефективно використовувати свій час. Забудь про обмеження громадського транспорту – з орендованим автомобілем ти завжди на керованому власному шляху у місті.</p>
      </div>
    );
  }