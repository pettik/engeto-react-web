# 🇨🇿 GithubUserFinder - Závěrečný projekt kurzu "React" na Engeto.cz

## Popis projektu
Tento repozitář obsahuje závěrečný projekt pro kurz "React" poskytovaný společností Engeto. Cílem projektu je vytvořit vícestránkovou React webovou aplikaci, která demonstruje schopnost studenta aplikovat koncepty naučené během kurzu. Projekt bude zkontrolován lektorem, který poskytne zpětnou vazbu. Úspěšné dokončení projektu je podmínkou pro získání certifikace.

## Požadavky na projekt
Projekt se skládá ze dvou hlavních stránek s následujícími specifikacemi:

### Stránka 1: Dynamická úvodní stránka
1. **Sekce záhlaví**:
   - Obsahuje záhlaví s dynamicky se měnícím textem. Text se mění náhodně při každém načtení stránky.
   
2. **Statické komponenty**:
   - Zahrnuje několik statických komponent, které mohou obsahovat jakýkoli obsah, jako je text a obrázky.

3. **Sekce záložek**:
   - Obsahuje záložky, které při kliknutí mění obsah zobrazený pod nimi. 

### Stránka 2: Vyhledávání uživatelů na GitHubu
1. **Formulář**:
   - Obsahuje formulář, který umožňuje uživatelům zadat uživatelské jméno na GitHubu.
   
2. **API dotaz**:
   - Využívá zadané uživatelské jméno z formuláře k dotazu na veřejné GitHub API. Například: `https://api.github.com/users/pettik`. Získaná data jsou následně zobrazena na stránce.

## Jak spustit projekt
Pro spuštění tohoto projektu lokálně, postupujte podle následujících kroků:

1. **Naklonujte repozitář**:
   ```bash
   git clone https://github.com/your-username/GithubUserFinder.git
   cd GithubUserFinder

## Nainstalujte závislosti
Ujistěte se, že máte nainstalovaný Node.js a npm. Poté spusťte:

```bash
npm install
 ```


## Spusťte vývojový server
Ujistěte se, že máte nainstalovaný Node.js a npm. Poté spusťte:


```bash
npm start
```

Tento příkaz spustí vývojový server a otevře aplikaci ve vašem výchozím webovém prohlížeči. Pokud se aplikace neotevře automaticky, můžete ji přistupit na adrese `http://localhost:3000`.

## Odevzdání projektu
- Projekty mohou být odevzdány k recenzi kdykoliv během kurzu a až do 4 měsíců od první lekce.
- Po odevzdání bude zpětná vazba a hodnocení poskytnuto do 14 dnů prostřednictvím e-mailu.
- Každý projekt může být přepracován a znovu odevzdán dvakrát. Třetí zamítnutí bude mít za následek neúspěšné získání certifikace.


## Ukázka stránek
### Stránka 1: Dynamická úvodní stránka

### Stránka 2: Vyhledávání uživatelů na GitHubu

## Další zdroje
- [GitHub API](https://docs.github.com/en/rest/users/users#get-a-user)

-----------------------------------------------------------------------------
# 🇬🇧 EN:

# GithubUserFinder - Final Project for "React" Course at Engeto

## Project Description
This repository contains the final project for the "React" course provided by Engeto. The aim of the project is to create a multi-page React web application that demonstrates the student's ability to apply concepts learned during the course. The project will be reviewed by a tutor, who will provide feedback. Successful completion of the project is a requirement for certification.

## Project Requirements
The project consists of two main pages with the following specifications:

### Page 1: Dynamic Homepage
1. **Header Section**:
   - Contains a header with dynamically changing text. The text changes randomly on each page reload.
   
2. **Static Components**:
   - Includes several static components that can contain any content, such as text and images.

3. **Tabs Section**:
   - Contains tabs that change the displayed content below them when clicked.

### Page 2: GitHub User Search
1. **Form**:
   - Contains a form that allows users to input a GitHub username.
   
2. **API Request**:
   - Uses the entered username from the form to query the public GitHub API. For example: `https://api.github.com/users/pettik`. The retrieved data is then displayed on the page.

## How to Run the Project
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/GithubUserFinder.git
   cd GithubUserFinder

## Install Dependencies
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
 ```


## Start the Development Server
Make sure you have Node.js and npm installed. Then run:


```bash
npm start
```


This command will start the development server and open the application in your default web browser. If the application does not open automatically, you can access it at http://localhost:3000.

## Project Submission
- Projects can be submitted for review at any time during the course and up to 4 months from the first lesson.
- After submission, feedback and evaluation will be provided within 14 days via email.
- Each project can be revised and resubmitted twice. A third rejection will result in failure to obtain certification.


## Ukázka stránek
### Page 1: Dynamic Homepage

### Page 2: GitHub User Search

## Additional Resources
- [GitHub API](https://docs.github.com/en/rest/users/users#get-a-user)

