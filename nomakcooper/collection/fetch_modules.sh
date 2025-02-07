#!/bin/bash
set -e

echo "Fetching latest Python modules from GitHub..."

# Define GitHub raw URLs for Python modules
SAR_FACTS_URL="https://raw.githubusercontent.com/NomakCooper/sar_info/main/library/sar_facts.py"
EXA_FACTS_URL="https://raw.githubusercontent.com/NomakCooper/exa_facts/main/library/exa_facts.py"

# Define the local destination
MODULES_DIR="nomakcooper/collection/plugins/modules"

# Ensure the directory exists
mkdir -p "$MODULES_DIR"

# Download the latest versions
curl -sL "$SAR_FACTS_URL" -o "$MODULES_DIR/sar_facts.py"
curl -sL "$EXA_FACTS_URL" -o "$MODULES_DIR/exa_facts.py"

echo "Successfully fetched latest versions!"