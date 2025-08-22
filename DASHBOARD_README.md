# LUNA MCU Dashboard System

A complete web-based control system for Universal Audio LUNA with a configuration dashboard.

## System Components

### Port 5001 - Main MCU Controller
- Primary LUNA fader control using MIDI CC messages
- Supports variable number of tracks (1-8)
- Maps faders to CC numbers starting at 10

### Port 5002 - Secondary CC Controller
- Alternative LUNA control using MIDI CC messages
- Maps tracks to CC numbers starting at 10
- Useful for different LUNA setups or DAW configurations

### Port 5003 - Configuration Dashboard 
- **NEW**: Central control panel for the entire system
- Configure number of available tracks (1-8)
- Set custom track names
- Set user names for each port
- Real-time configuration updates

## Quick Start

### Option 1: Start Everything at Once
```bash
python start_all.py
```

### Option 2: Start Individual Components
```bash
# Terminal 1: Main controllers (ports 5001 & 5002)
python app.py

# Terminal 2: Dashboard (port 5003) 
python dashboard.py
```

## Using the Dashboard

1. **Open Dashboard**: Navigate to `http://localhost:5003`

2. **Configure Tracks**:
   - Set number of tracks (1-8)
   - Name each track (e.g., "Drums", "Bass", "Lead Vocal")
   - Changes apply immediately to both controllers

3. **Configure Users**:
   - Set display names for each port
   - Useful for multi-user setups

4. **Access Controllers**:
   - Click links in dashboard to open controller interfaces
   - Or navigate directly to `http://localhost:5001` and `http://localhost:5002`

## Configuration File

The system uses `config.json` to store settings:

```json
{
  "tracks": {
    "count": 4,
    "names": ["Drums", "Bass", "Guitar", "Vocals"]
  },
  "users": {
    "port_5001": "Mix Engineer",
    "port_5002": "Producer"
  },
  "last_updated": "2025-08-21T10:30:00.000Z"
}
```

## Features

- **Dynamic Interface**: Track controls adjust automatically to configuration
- **Real-time Updates**: Changes in dashboard immediately affect controllers  
- **Mobile Friendly**: Responsive design works on tablets and phones
- **Persistent Settings**: Configuration saved automatically
- **Multi-user Support**: Different user names for different workflows

## MIDI Setup

Ensure you have a virtual MIDI port configured:
- **macOS**: Use Audio MIDI Setup.app to create IAC Driver Bus
- **Windows**: Use loopMIDI or similar virtual MIDI software  
- **Linux**: Use JACK or ALSA loopback

## API Endpoints

### Main Controllers (5001/5002)
- `GET /api/status` - System status and configuration
- `GET /api/config` - Current configuration  
- `GET /api/fader/{fader_number}/{value}` - Control fader

### Dashboard (5003)
- `GET /api/config` - Get current configuration
- `POST /api/config` - Update configuration
- `GET /api/status` - Dashboard status

## Troubleshooting

1. **MIDI Issues**: Check virtual MIDI port configuration
2. **Port Conflicts**: Ensure ports 5001-5003 are available
3. **Configuration**: Delete `config.json` to reset to defaults
4. **Browser Cache**: Refresh pages if changes don't appear

## Development

The system is built with:
- **Backend**: Python Flask
- **Frontend**: Vanilla JavaScript with dynamic HTML generation
- **Configuration**: JSON file storage
- **MIDI**: python-mido library

## Advanced Usage

- Modify `CONFIG_FILE` path in source for custom locations
- Extend MIDI mappings in `send_mcu_fader_message()` and `send_cc_message()`
- Customize UI themes by editing CSS in dashboard.py
