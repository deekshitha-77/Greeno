**DevOps Assignment 1:** **CI/CD Pipeline with GitHub Actions and SonarQube**

**Project Overview**
This project demonstrates a fully automated CI/CD pipeline for a full-stack web application using GitHub Actions for automation, SonarQube for code quality analysis, and Railway for deployment.

**Problem Statement**
Manual deployment and code quality checks slow down development and increase errors. The goal of this project is to:
- Automate the build, test, and deployment process.
- Ensure code quality using SonarQube.
- Deploy the application automatically to Railway after successful checks.

**Tech Stack**
- Frontend: React (or any frontend framework of your choice)
- Backend: Node.js with Express (or your preferred backend stack)
- Database: PostgreSQL (if applicable)
- CI/CD: GitHub Actions
- Code Quality: SonarQube
- Deployment: Railway


**CI/CD Pipeline with GitHub Actions**
Workflow Steps:
1. Trigger on push/pull request: The pipeline runs automatically.
2. Install dependencies: Installs required packages.
3. Run tests: Ensures code correctness.
4. SonarQube Analysis: Scans the code for bugs, vulnerabilities, and code smells.
5. Deploy to Railway: If all checks pass, the app is deployed automatically.


**SonarQube Integration**
To analyze code quality:
1. Create a SonarCloud account.
2. Generate a SonarQube Token.
3. Store it in GitHub Secrets as `SONAR_TOKEN`.
4. Modify the GitHub Actions workflow to include SonarQube analysis.

**Deployment on Railway**
1. Create an account on Railway.
2. Connect your GitHub repository.
3. Railway will automatically deploy the latest changes.

Conclusion
This project automates the entire CI/CD workflow and ensures high code quality. With GitHub Actions and SonarQube, every commit is tested and deployed seamlessly.


