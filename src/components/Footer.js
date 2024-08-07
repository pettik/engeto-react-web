footer {
  width: 100%;
  background-color: var(--color-primary-400);
  padding:1rem 0;
}

.footer__container {
  max-width: 95vh;
  margin: 0 auto;
  text-align: center;
  color: var(--white);
  font-weight: 400;
}

.footer__container ul{
  list-style:none;
  display:flex;
  flex-direction: column;
  row-gap:.75rem;
  align-items:center;
  justify-content: center;
}



.footer__container > ul{
  margin-bottom:1rem;
  row-gap:1.75rem;
}

.footer__container a{
  font-weight: 500;
  transition: color .2s;
}

.footer__container a:hover{
  color: var(--color-primary-700);
}

.footer__container a.footer__logo{
  font-weight: 600;
    font-size: 1.5rem;
}



.footer__social li a{
  font-size: 1.5rem;
}

ul.footer__social{
  column-gap: 1rem;
  flex-direction: row;
}


@media screen and (min-width: 768px) {
  .footer__container {
    max-width: 900px;
  }

  .footer__container ul{
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }

  .footer__links{
    column-gap: 1rem;
  }

  
}
