# Mobile Setup Guide for iPhone

## Quick Setup Steps:

1. **Make sure your iPhone and laptop are on the same WiFi network**

2. **Open Safari on your iPhone and go to:**
   ```
   http://10.0.0.221:5001
   ```
   or for the secondary controller
   ```
   http://10.0.0.221:5002
   ```

3. **For easier access, add to home screen:**
   - Tap the Share button in Safari
   - Select "Add to Home Screen" 
   - Name it "LUNA Controller"
   - Tap "Add"

4. **Configure Ableton Live:**
   - Go to Preferences → Link/Tempo/MIDI
   - In the MIDI section, find "IAC Driver Bus 1"
   - Set Track and Remote to "On" for input
   - Set the Control Surface to "Mackie Control"
   - Set Input to "IAC Driver Bus 1"

## Network Access URL:
**http://10.0.0.221:5001** (primary) or **http://10.0.0.221:5002** (secondary)

## Troubleshooting:

- **If the page doesn't load:** Make sure both devices are on the same WiFi
- **If faders don't work:** Check Ableton's MIDI settings
- **If connection is slow:** Try restarting the server on your laptop

## Features:
- Touch-optimized sliders for mobile use
- Real-time MIDI control of Ableton tracks
- Works in landscape and portrait mode
- No app installation required

## Advanced Usage:
You can also control faders via direct URL calls:
- `http://10.0.0.221:5001/api/fader/1/100` - Set fader 1 to 100 (CC10)
- `http://10.0.0.221:5001/api/fader/2/64` - Set fader 2 to 64 (CC11)
- `http://10.0.0.221:5001/api/fader/3/0` - Set fader 3 to 0 (CC12)
- `http://10.0.0.221:5002/api/fader/1/127` - Set fader 1 to 127 (CC10)
