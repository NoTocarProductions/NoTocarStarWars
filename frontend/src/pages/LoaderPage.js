import classes from "./LoaderPageCSS.module.css";

export default function LoaderPage() {
  return (
    <>
      <div class={classes.starWarsIntro}>
        <p class={classes.introText}>A few days ago, during...</p>

        <h2 class={classes.mainLogo}>
          The Life of Darth RotKiv
        </h2>

        <div class={classes.mainContent}>
          <div class={classes.titleContent}>
            <p class={classes.contentHeader}>
              EPISODE I
              <br />A CASE PRESENTATION
            </p>

            <br />

            <p class={classes.contentBody}>
              After years of galactic silence, MakeWaves is on the brink of a
              new sith lord to join their team. Now, with the Force preparing to awaken,
              the people of MakeWaves will cast judgement upon the dark lord Rotkiv for he
              was assigned with the impossible task of creating a Star Wars case.
              <br /> <br /> 
              The council
              of MakeWaves will gather and assess the case made by the dark lord. However, 
              the dark lord made plans to deceive the council for he created a distraction.
              Whilst the council is reading this epic saga text he wrote, he is actually fetching data
              necessary for the approval of the council. 
              <br /> <br /> 
              The dark lord wishes this text will be 
              sufficiently long for the data to be fetched. If it is not long enough he fears
              the council will become suspicious and discover they are being deceived.
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
              Each second now the data hasn't been fully fetched the dark lord's armpits are becoming
              more and more moist. The dark lord is transpiring before the council, knees weak, arms are heavy,
              hopefully he hasn't vomitted on his sweater already...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
