# 🎓 ProNote Academy

## 📌 Projet de Soutenance – Développement Digital Full Stack (OFPPT)

**ProNote Academy** est une plateforme web de gestion pédagogique destinée aux établissements de formation professionnelle.  
Elle permet de gérer les **stagiaires, formateurs, modules, notes et bulletins**, de manière **sécurisée, moderne et automatisée**, inspirée du système **Massar**.

---

## 🧠 Contexte du Projet

La gestion pédagogique manuelle présente plusieurs limites :
- Manque de centralisation des données
- Accès difficile aux résultats
- Absence de traçabilité des modifications

**ProNote Academy** a été conçu pour répondre à ces problématiques en digitalisant entièrement le suivi pédagogique.

---

## 🎯 Objectifs du Projet

- Digitaliser la gestion pédagogique
- Faciliter la consultation des notes et bulletins
- Sécuriser les accès selon les rôles
- Offrir un tableau de bord clair et dynamique
- Mettre en place un système de logs et notifications via microservice

---

## 👥 Types d’Utilisateurs

| Rôle | Description |
|----|----|
| Administrateur | Gestion globale de la plateforme |
| Formateur | Gestion des notes et modules |
| Stagiaire | Consultation des résultats |

---

## ⚙️ Fonctionnalités

### 👑 Administrateur
- Gestion des comptes (stagiaires & formateurs)
- Gestion des classes et filières
- Gestion des modules
- Attribution des permissions
- Consultation des statistiques globales

### 👨‍🏫 Formateur
- Ajouter / modifier / supprimer les notes
- Gérer les modules
- Tableau de bord dynamique
- Historique des actions (via microservice Node.js)

### 👨‍🎓 Stagiaire
- Consulter ses notes
- Voir la moyenne générale
- Télécharger le bulletin PDF
- Recevoir des notifications

---

## 🏗️ Architecture Globale

```txt
React.js (Frontend)
        ↕ Axios
Laravel API (Auth & Notes)
        ↕
       MySQL
        ↕ Webhooks
Node.js Microservice (Logs & Notifications)
        ↕
      MongoDB
