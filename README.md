# 🇨🇿 GithubUserFinder - Závěrečný projekt kurzu "React" na Engeto.cz

# Autor:
- Jméno a příjmení: Petr Bednarski
- E-mail: petrbednarski@seznam.cz
- Discord: pettik_ (PetrB)

## Popis projektu
Tento repozitář obsahuje závěrečný projekt pro kurz "React" poskytovaný společností Engeto. Hlavním cílem projektu je vytvořit vícestránkovou React webovou aplikaci, která umožňuje uživatelům vyhledávat informace o uživatelích GitHubu prostřednictvím GitHub API. Uživatelé mohou také zobrazit přehled veřejných repozitářů nalezených uživatelů a prokliknout se přímo na stránku daného repozitáře na GitHubu.

## Hlavní vlastnosti aplikace
- **Vyhledávání uživatelů GitHubu**: Uživatelé mohou zadat uživatelské jméno a získat základní informace o uživateli, jako je profilový obrázek, jméno, bio a počet veřejných repozitářů.
- **Zobrazení repozitářů**: Aplikace zobrazí seznam veřejných repozitářů daného uživatele, každý z nich slouží jako odkaz na odpovídající stránku repozitáře na GitHubu.
- **Tři hlavní stránky**:
  - **Domovská stránka**: Úvodní stránka s možností navigace na další stránky.
  - **Vyhledávač GitHub uživatelů**: Stránka, kde uživatelé mohou vyhledávat informace o GitHub uživatelích.
  - **O aplikaci**: Stránka s informacemi o účelu a autorovi aplikace.
- **Zobrazení chybové stránky**: Pokud uživatel zadá neexistující cestu, aplikace zobrazí chybovou stránku.

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

Tento příkaz spustí vývojový server a otevře aplikaci ve vašem výchozím webovém prohlížeči. Pokud se aplikace neotevře automaticky, můžete ji přistoupit na adrese `http://localhost:3000`.

## Online verze
Aplikaci můžete také vyzkoušet online na adrese: [https://pettik-engeto.netlify.app/](https://pettik-engeto.netlify.app/). Pro optimální výkon však doporučujeme stáhnout projekt a spustit ho lokálně, protože online verze může občas vykazovat chyby způsobené nesprávně zpracovanými cestami.


## Odevzdání projektu
- Projekty mohou být předloženy k revizi prostřednictvím oficiálního kanálu Engeto.
- Lektor poskytne zpětnou vazbu, která je nezbytná pro získání certifikace.

## Opravy po prvním hodnocení

Dne 3.10.2024 byl projekt upraven na základě zpětné vazby od hodnotícího lektora. Tyto úpravy zahrnovaly následující body:

1. `Home.js` – Funkce `useCallback` byla odstraněna, protože nebyla potřebná.
2. `Home.js` – Redundantní `useEffect` byl odstraněn, jelikož stav `title` již přijímal výchozí hodnotu z funkce `getRandomTitle`.
3. `Home.js` – Komponenta `BenefitItem` byla přesunuta do samostatného souboru pro lepší modularitu.
4. `GitHubFinder.js` – URL pro repozitáře bylo upraveno, aby využívalo `${userUrl}/repos?per_page=10`.
5. `GitHubFinder.js` – Přidány detailnější chybové zprávy pro uživatele v UI, aby bylo jasnější, co se stalo.
6. `GitHubFinder.js` – Místo mnoha stavů (`useState`) byl zaveden jeden stavový objekt pro efektivnější správu dat uživatele.


## Další zdroje
- [GitHub API](https://docs.github.com/en/rest/users/users#get-a-user)

-----------------------------------------------------------------------------
# 🇬🇧 EN:

# 🇬🇧 GithubUserFinder - Final Project of the "React" Course at Engeto.cz

## Project Description
This repository contains the final project for the "React" course provided by Engeto. The main goal of the project is to create a multi-page React web application that allows users to search for GitHub users' information using the GitHub API. Users can also view a list of public repositories for the found users and navigate directly to the repository's page on GitHub.

## Key Features of the Application
- **GitHub User Search**: Users can enter a GitHub username to retrieve basic information about the user, such as profile picture, name, bio, and the number of public repositories.
- **Repository Display**: The application displays a list of public repositories for the specified user, each serving as a link to the corresponding repository page on GitHub.
- **Three Main Pages**:
  - **Home Page**: The introductory page with navigation options to other pages.
  - **GitHub User Finder**: A page where users can search for GitHub users' information.
  - **About the App**: A page with information about the purpose and author of the application.
- **Error Page Display**: If a user enters a non-existing route, the application will display an error page.

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

## Online Version
You can also try the application online at: [https://pettik-engeto.netlify.app/](https://pettik-engeto.netlify.app/). However, for optimal performance, we recommend downloading the project and running it locally, as the online version might occasionally show errors due to incorrectly processed paths.


## Project Submission
- Projects can be submitted for review through the official Engeto channel.
- The instructor will provide feedback, which is necessary to obtain certification.

## Fixes after the First Review

On October 3, 2024, the project was updated based on feedback from the reviewing instructor. The updates addressed the following points:

1. `Home.js` – The `useCallback` function was removed as it was unnecessary.
2. `Home.js` – The redundant `useEffect` was removed since the `title` state was already set to the default value using `getRandomTitle`.
3. `Home.js` – The `BenefitItem` component was moved to a separate file for better modularity.
4. `GitHubFinder.js` – The URL for repositories was updated to use `${userUrl}/repos?per_page=10`.
5. `GitHubFinder.js` – More detailed error messages were added to the UI to make it clearer for the user what went wrong.
6. `GitHubFinder.js` – Instead of multiple `useState` hooks, a single state object was introduced for more efficient user data management.


## Additional Resources
- [GitHub API](https://docs.github.com/en/rest/users/users#get-a-user)

