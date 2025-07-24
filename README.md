# Virtual MCU MIDI Controller for Universal Audio LUNA

A web-based virtual MIDI controller that implements Mackie Control Universal (MCU) protocol to control faders in Universal Audio LUNA via HTTP endpoints and a simple web interface.

## What it does

This application creates a virtual MIDI output port and provides:
- A Flask web server with HTTP endpoints for controlling 3 MCU faders
- A simple web interface with sliders that send MIDI commands to LUNA
- Proper MCU protocol implementation using pitch-bend messages for fader control

## Why use this?

- Control LUNA faders remotely via HTTP API
- Build custom control surfaces using web technologies
- Integrate LUNA control into other applications via simple HTTP calls
- No need for physical MIDI hardware

## Prerequisites

- **Python 3.8+**
- **Virtual MIDI port software:**
  - **macOS**: Built-in IAC Driver (Audio MIDI Setup)
  - **Windows**: loopMIDI or similar virtual MIDI software
  - **Linux**: ALSA virtual MIDI ports

## Setup

### 1. Create Virtual MIDI Port

**macOS:**
1. Open **Audio MIDI Setup** (Applications → Utilities)
2. Go to **Window → Show MIDI Studio**
3. Double-click **IAC Driver**
4. Check **Device is online**
5. Add a new port named `LUNA-MCU` (or your preferred name)

**Windows:**
1. Download and install [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)
2. Create a new virtual port named `LUNA-MCU`

### 2. Install Python Dependencies

```bash
# Clone or download this repository
cd web-interface-luna

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt
```

## Configuration

The MIDI port name can be configured in two ways:

1. **Environment variable** (recommended):
   ```bash
   export MIDI_PORT="LUNA-MCU"
   python app.py
   ```

2. **Edit the code**: Change the `MIDI_PORT_NAME` constant in `app.py`

## Running the Application

1. **Start the server:**
   ```bash
   python app.py
   ```

2. **Open the web interface:**
   Navigate to `http://localhost:5000` in your web browser

3. **Configure LUNA:**
   - In LUNA, go to **Preferences → Controllers**
   - Add a new controller and select **Mackie Control Universal**
   - Choose your virtual MIDI port (`LUNA-MCU`) as the input device

## Usage

### Web Interface
- Use the three sliders labeled **Fader 1**, **Fader 2**, and **Fader 3**
- Each slider controls the corresponding track fader in LUNA
- Values range from 0-127 (MIDI standard)
- The current value is displayed next to each slider

### HTTP API
Send GET requests to control faders programmatically:

```bash
# Set fader 1 to value 100
curl "http://localhost:5000/api/fader/1/100"

# Set fader 2 to value 64 (center position)
curl "http://localhost:5000/api/fader/2/64"

# Set fader 3 to minimum (0)
curl "http://localhost:5000/api/fader/3/0"
```

**Response format:**
```json
{"status": "ok", "fader": 1, "value": 100}
```

## Troubleshooting

### Common Issues

**"No MIDI ports available" error:**
- Ensure your virtual MIDI port is created and online
- Check the port name matches the configuration
- On macOS, verify IAC Driver is enabled in Audio MIDI Setup

**LUNA not responding to faders:**
- Verify the virtual MIDI port is selected in LUNA's controller preferences
- Ensure the controller type is set to "Mackie Control Universal"
- Try restarting LUNA after configuring the controller

**Web interface not loading:**
- Check if another application is using port 5000
- Try accessing `http://127.0.0.1:5000` instead of localhost
- Verify the Flask server started without errors

**Permission errors on Linux:**
- Add your user to the `audio` group: `sudo usermod -a -G audio $USER`
- Log out and back in for changes to take effect

**Firewall blocking connections:**
- Add an exception for Python or port 5000 in your firewall settings
- On macOS, you may see a security prompt when first running the app

## Technical Details

- **MIDI Protocol**: Implements MCU fader control using pitch-bend messages (0xE0 + channel)
- **Channels**: Fader 1 = Channel 0, Fader 2 = Channel 1, Fader 3 = Channel 2
- **Value Encoding**: 14-bit values split into LSB and MSB bytes
- **Port**: Web server runs on `http://localhost:5000`

## License

MIT License - Feel free to modify and distribute as needed.
