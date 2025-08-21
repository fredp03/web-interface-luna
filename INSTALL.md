# M4L Individual Mixer - Quick Installation Guide

## Prerequisites

1. **Ableton Live with Max for Live**
2. **Python 3.8+** installed on your system
3. **Virtual MIDI Port** (IAC Driver Bus 1 on macOS)

## Installation Steps

### 1. Install Python Dependencies
```bash
cd "/Users/fredparsons/Documents/Side Projects/web-interface-luna"
pip install -r requirements.txt
```

### 2. Setup Virtual MIDI Port (macOS)
1. Open **Audio MIDI Setup** (Applications > Utilities)
2. Go to **Window > Show MIDI Studio**
3. Double-click **IAC Driver**
4. Check **Device is online**
5. Ensure a port named **Bus 1** exists

### 3. Test the System
```bash
# Test all components
python test_m4l_system.py

# Or start the server manually for testing
python start_m4l_server.py
```

### 4. Load in Ableton Live
1. Open your Live session
2. Add the device: `M4L_WebInterface_Mixer.amxd` to any track
3. Click **Start Server** in the device
4. Click **Refresh Tracks** to discover your session tracks
5. Click **Open Web Interface** to access the control panel

## Quick Start Workflow

1. **Assign Tracks**: 
   - Select tracks in the M4L device interface
   - Assign CC numbers and nicknames
   - Check boxes to add tracks to Mix 1 or Mix 2

2. **Configure Outputs**:
   - Route External Out 1&2 to your first monitoring destination
   - Route External Out 9&10 to your second monitoring destination

3. **Control via Web**:
   - Open `http://localhost:5001` in your browser
   - Select tracks using the web interface
   - Adjust levels with the main fader
   - Control mix outputs with Headphones/Backing buttons

## Troubleshooting

### Server Won't Start
```bash
# Check Python installation
python3 --version

# Install dependencies
pip install flask mido requests python-rtmidi

# Test MIDI setup
python -c "import mido; print(mido.get_output_names())"
```

### MIDI Not Working
1. Verify IAC Driver Bus 1 is created and online
2. Check Live's MIDI preferences (should receive from IAC Driver)
3. Test with: `python test_midi.py`

### Web Interface Not Loading
1. Check server status in M4L device
2. Try `http://localhost:5001` and `http://localhost:5002`
3. Check firewall settings

## File Structure
```
web-interface-luna/
├── M4L_WebInterface_Mixer.amxd    # Load this in Live
├── app_m4l.py                     # Enhanced web server
├── web_interface_server.js        # M4L control logic
├── server_launcher.py             # Server management
├── start_m4l_server.py           # Quick start script
├── test_m4l_system.py            # System test script
├── static/
│   ├── index.html                # Web interface
│   └── style.css                 # Styling
└── requirements.txt              # Python dependencies
```

## Support Files
- `M4L_README.md` - Comprehensive documentation
- `test_m4l_system.py` - System verification
- `start_m4l_server.py` - Standalone server launcher

For detailed usage instructions, see `M4L_README.md`.
