# SWE40006_Project - Calculator Web App

This repository contains a simple calculator web application built with HTML, CSS, and JavaScript. The purpose of this repo is to demonstrate the Deployment Pipeline we have built in AWS.

## Table of Contents
- [Calculator Overview](#calculator-overview)
- [How to Run Locally](#how-to-run-locally)
- [AWS CodeDeploy Configuration](#aws-codedeploy-configuration)
- [Contributing](#contributing)

## Calculator Overview
The calculator is a basic web app with an interface that allows users to input numbers and perform arithmetic operations. It includes features like:
- Addition, subtraction, multiplication, and division
- Clear display and delete last input
- Responsive layout for easy use on different screen sizes

## How to Run Locally
To run the calculator web app locally, follow these steps:

1. Clone the repository:
   
    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```
    
    ```bash
    cd repository-name
    ```

2. Open the `calculator/index.html` file in your browser:

    ```bash
    open calculator/index.html
    ```

## AWS CodeDeploy Configuration

The repository contains an `appspec.yml` file in the root directory, which is used to configure AWS CodeDeploy for automated deployment of the web app to EC2 instances. This file defines how and where the calculator app should be deployed and includes hooks for running scripts during the deployment process.

### `appspec.yml` Explanation
The `appspec.yml` file contains the following sections:

1. **version**: Specifies the version of the AppSpec format. In our case, it is `0.0`, the default version.
2. **os**: Defines the target operating system. Since we are deploying to a Linux-based EC2 instance, we use `linux` Note: This can easily be changed.
3. **files**: This section describes which files from the repository should be copied to the EC2 instance and their destination paths. For example, the `calculator` folder will be copied to `/var/www/html` on the EC2 instance, which is the default location for web content served by Apache.
4. **hooks**: Defines lifecycle event hooks, which are custom scripts that run at various stages of the deployment process. These scripts handle tasks like installing dependencies or restarting the server.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:
    
    ```bash
    git checkout -b feature-name
    ```

3. Commit your changes and push them to GitHub:
    
    ```bash
    git commit -m "describe your feature"
    ```
    
    ```bash
    git push origin feature-name
    ```
