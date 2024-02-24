const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
     
      backgroundImage:`url('https://https://www.gettyimages.com/detail/photo/saint-sophia-square-or-sofijivska-square-kyiv-royalty-free-image/870792778?adppopup=true')`,
      // backgroundImage: `url('https://static.displate.com/857x1200/displate/2023-02-26/192931441896229c5d355dfaf481bece_63693a2beb0cc55dff4148104028ebc0.jpg')`
    },
    title: {
      fontWeight: 400,
      fontSize: 164,
      textAlign: 'center',
      color: '#fff',
      textShadow: '1px 1px 2px black',
    },
    text: {
      fontWeight: 400,
      fontSize: 48,
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
        <p style={styles.text}>Мобільність та легкість пересування містом стають реальністю, коли у тебе є доступ до автомобілю. Орендоване авто – це ключ до швидкого та легкого пересування між міськими районами, дозволяючи тобі ефективно використовувати свій час. Забудь про обмеження громадського транспорту – з орендованим автомобілем ти завжди на керованому власному шляху у місті.</p>
      </div>
    );
  }