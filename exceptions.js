function MyError(mssg) {
  const err = new Error(mssg);
  err.nom = "mon erreur";
  return err;
}

class MonErreur extends Error {
  constructor(code, ...args) {
    super(args);
    this.code = code;
  }
}

try {
  throw new MonErreur(404 ,"jolie");
} catch (err) {
  console.error(err.code);
}
