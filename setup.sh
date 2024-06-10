#!/bin/bash

# Function to print messages with formatting
print_message() {
  printf "%s\n" "$1"
}

# Function to check if a command is available
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if Yarn is installed, if not, install it
if ! command_exists yarn; then
  print_message "Yarn is not installed. Installing..."
  npm install -g yarn >/dev/null 2>&1
  print_message "Yarn installation completed."
fi

# If in Cloud Shell, set up NVM and update NodeJS version
if [ ! -z "$CLOUD_SHELL" ]; then
  print_message "Setting up NVM..."
  export NVM_DIR="/usr/local/nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
  print_message "NVM setup completed."
  
  print_message "Updating NodeJS version..."
  nvm install --lts
  print_message "NodeJS version updated."
fi

# Install project dependencies
print_message "Installing dependencies..."
yarn install
print_message "Dependencies installation completed."

# Build the React app
print_message "Building React app..."
yarn run build
print_message "React app build completed."

print_message "Setup completed successfully!"

# Provide a notice about ensuring a compatible NodeJS version in Cloud Shell
if [ ! -z "$CLOUD_SHELL" ]; then
  printf "\n"
  printf "###############################################################################\n"
  printf "#                                   NOTICE                                    #\n"
  printf "#                                                                             #\n"
  printf "# Make sure you have a compatible NodeJS version with the following command:  #\n"
  printf "#                                                                             #\n"
  printf "# nvm install --lts                                                           #\n"
  printf "#                                                                             #\n"
  printf "###############################################################################\n"
fi