#!/usr/bin/env python3
"""
Test script to monitor MIDI messages being sent to IAC Driver Bus 1
"""

import mido
import time

def monitor_midi():
    """Monitor MIDI messages on IAC Driver Bus 1"""
    try:
        # Open MIDI input to monitor messages
        midi_in = mido.open_input('IAC Driver Bus 1')
        print("Monitoring MIDI messages on 'IAC Driver Bus 1'...")
        print("Send some fader commands via the web interface and watch the output.")
        print("Press Ctrl+C to stop monitoring.\n")
        
        while True:
            msg = midi_in.receive()
            if msg.type == 'pitchwheel':
                # Convert pitch value back to 0-127 range
                fader_value = int((msg.pitch + 8192) / 16383 * 127)
                print(f"Received MCU Fader: Channel {msg.channel} (Fader {msg.channel + 1}), "
                      f"Pitch={msg.pitch}, Value={fader_value}")
            else:
                print(f"Other MIDI message: {msg}")
                
    except KeyboardInterrupt:
        print("\nStopping MIDI monitor...")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        if 'midi_in' in locals():
            midi_in.close()

if __name__ == '__main__':
    monitor_midi()
