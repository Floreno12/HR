#!/bin/bash

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> /var/log/sepio_updater.log
}

show_header() {
    echo "====================================" | lolcat
    figlet -c Sepio Updater | lolcat
    echo "====================================" | lolcat
}

if [ "$(id -u)" != "0" ]; then
    log "Error: This script must be run as root."
    exit 1
fi

SCRIPT_DIR=$(dirname "$(realpath "$0")")
SEPIO_APP_DIR="$SCRIPT_DIR/Sepio-App"
BACKEND_SERVICE="node-server"
FRONTEND_SERVICE="react-build"

update_backend() {
    log "Updating backend from Git repository..."
    cd "$SEPIO_APP_DIR/backend"
    git pull origin main
    if [ $? -ne 0 ]; then
        log "Error: Failed to pull updates from Git repository."
        exit 1
    fi

    log "Installing backend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        log "Error: Failed to install backend dependencies."
        exit 1
    fi
}

update_frontend() {
    log "Updating frontend from Git repository..."
    cd "$SEPIO_APP_DIR/front-end"
    git pull origin main
    if [ $? -ne 0 ]; then
        log "Error: Failed to pull updates from Git repository."
        exit 1
    fi

    log "Installing frontend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        log "Error: Failed to install frontend dependencies."
        exit 1
    fi

}

restart_backend() {
    log "Restarting backend service..."
    systemctl restart $BACKEND_SERVICE
}

restart_frontend() {
    log "Restarting frontend service..."
    systemctl restart $FRONTEND_SERVICE
}


log "Starting application update process..."

update_backend
update_frontend

restart_backend
restart_frontend

log "Application update and service restart completed successfully."

