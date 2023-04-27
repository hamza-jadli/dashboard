import cx from 'classnames';
import Head from 'next/head';
import styles from '/src/styles/addStudent.module.css'

export default AddStudent;

function AddStudent() {
  return (
    <>
     <Head>
        <title>Ajouter Etudiant</title>
      </Head>
      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Ajouter Etudiant</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Nom</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Prenom</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Adresse</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Email</label>
          </div>
          

          <div className={cx(styles.checkbox,"mb-3")}> <br/>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Enregistrer</button>
        </form>
      </main>

    </>
  )
}