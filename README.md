# Bay-Area-Disaster-Tracker

A live disaster monitoring dashboard for the San Francisco Bay Area, focused on helping residents access up-to-date information about ongoing natural disasters, preparedness resources, and recovery data.

## Features

- **Map Dashboard**: See current and recent disaster activity (e.g., earthquakes, fires) displayed on an interactive map of the Bay Area.
- **Real-Time Data Feeds**: Automatically pulls updates from reputable third-party APIs such as the USGS, NASA EONET, or weather services.
- **Disaster Alerts**: Provides critical notifications and summaries for local disasters as they develop.
- **Data Analysis**: Tools to analyze different forms of disasters to have data ready for usage.

## Getting Started

### Prerequisites

- Python 3.x
- `pip` (Python package manager)
- Additional libraries as specified in `requirements.txt` (e.g., `Flask`, `requests`, `pandas`, `geopandas`, `folium`, etc.)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/samarthgaggar/Bay-Area-Disaster-Tracker.git
    cd Bay-Area-Disaster-Tracker
    ```

2. **Install dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the application**:

    ```bash
    python app.py
    ```

## Usage

- **Map View**: Visualize current disaster incidents across Bay Area counties.\
- **Graph View**: Analyze different results of locations by their risk factors and chances for natural disasters.
- **Disaster Details**: Click markers or incident cards for more information, sources, and recommended actions.

## Contributing

We welcome feedback and contributions, especially from:

- Civic technologists & data scientists
- Local agencies & community organizers
- Residents interested in disaster resilience

Please open issues for bug reports or feature ideas, or send pull requests for improvements.

## Acknowledgments

Inspired by and/or adapted with respect to open data initiatives, public safety agencies, and the open-source disaster response community.

*This project is unaffiliated with official government emergency management systems.
