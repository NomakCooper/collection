#!/bin/bash

# Ensure script is run with correct permissions
set -e

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Install dependencies from requirements.txt
if [[ -f "$SCRIPT_DIR/../meta/requirements.txt" ]]; then
    echo "Installing dependencies from requirements.txt..."
    pip install -r "$SCRIPT_DIR/../meta/requirements.txt"
else
    echo "requirements.txt not found!"
    exit 1
fi

echo "Post-installation setup complete!"