#include "Arduino.h"
// https://github.com/schreibfaul1/ESP32-audioI2S
#include "Audio.h"
#include "SD.h"
#include "FS.h"

#include <Wire.h>
// https://github.com/adafruit/Adafruit-PWM-Servo-Driver-Library
#include <Adafruit_PWMServoDriver.h>


// Define I/O pins (expand as required)
// servo motors control:
#define EYEBROWS_INPUT  4    // potentiometer output
#define MOUTH_INPUT  14     // potentiometer output
#define NECK_INPUT  27      // potentiometer output
#define I2C_SDA  21       // I2C SDA for PCA9685
#define I2C_SCL  22       // I2C SCL for PCA9685
// microSD Card Reader connections
#define SD_CS  5        // SPI chip select for SD card
#define SPI_MOSI  23 
#define SPI_MISO  19
#define SPI_SCK  18
// I2S Connections
#define LRCLK  26       // Left Right Clock
#define BCLK  27        // Bit Clock Input
#define DIN  25         // Digital Data input

// Define servo motor connections (expand as required)
#define LEFT_EYEBROW_SERVO  0 // Servo Motor on PCA9685 connector 0
#define RIGHT_EYEBROW_SERVO  1  // Servo Motor on PCA9685 connector 1
#define MOUTH_SERVO  2      // Servo Motor on PCA9685 connector 2
#define NECK_SERVO  3     // Servo Motor on PCA9685 connector 3

// Define maximum and minimum number of "ticks" for the servo motors
// Range from 0 to 4095
// This determines the pulse width
#define MIN_TICKS  0      // Minimum value
#define MAX_TICKS  4095     // Maximum value
#define SERVO_MIN  80     // Minimum value
#define SERVO_MIDDLE  340   // Middle value
#define SERVO_MAX  570      // Maximum value
// TODO: calibrate the values ​​of the different position states
#define TILTED_LEFT  SERVO_MIN  // eyebrow tilted left value
#define BALANCED  SERVO_MIDDLE  // eyebrow balanced value
#define TILTED_RIGHT SERVO_MAX  // eyebrow tilted right value
#define OPEN_MOUTH  80      // open mouth value
#define CLOSE_MOUTH  570    // close mouth value
#define TURNED_LEFT  SERVO_MIN  // neck turned left value
#define STRAIGHT  SERVO_MIDDLE  // neck is straight ahead value
#define TURNED_RIGHT SERVO_MAX  // neck turned right value

#define AUDIO_FILENAME  "/audio_file.mp3"

uint movement_index;
uint number_of_movements;

// Create Audio object
Audio audio;

// Create object to represent PCA9685 at default I2C address
Adafruit_PWMServoDriver pca9685 = Adafruit_PWMServoDriver(0x40);

long mapInRange(long x, long in_min, long in_max, long out_min, long out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

void setup() {
    
	// serial monitor setup
    Serial.begin(115200);

    // initialize PCA9685
     pca9685.begin();
    //  // set PWM Frequency to 50Hz
     pca9685.setPWMFreq(50);

	// Set microSD Card CS as OUTPUT and set HIGH
    pinMode(SD_CS, OUTPUT);      
    digitalWrite(SD_CS, HIGH); 
    
    // Initialize SPI bus for microSD Card
    SPI.begin(SPI_SCK, SPI_MISO, SPI_MOSI);
    
    // Start microSD Card
    if(!SD.begin(SD_CS))
    {
      Serial.println("Error accessing microSD card!");
      while(true); 
    }
    
    // Setup I2S 
    audio.setPinout(BCLK, LRCLK, DIN);
    
    // Set Volume
    audio.setVolume(3);
    
    // Open music file
    audio.connecttoFS(SD,AUDIO_FILENAME);

	Serial.println("Finished setting up");
}
 
void loop()
{
    audio.loop();

    int sensorValue0 = analogRead(EYEBROWS_INPUT);
	int outputValue0 = mapInRange(sensorValue0, 0, 4095, SERVO_MIN, SERVO_MAX);
	pca9685.setPWM(LEFT_EYEBROW_SERVO, 0, outputValue0);
	
	// Print to serial monitor
	Serial.print("potentiometer 0 = ");
	Serial.println(sensorValue0);
	Serial.print("\t Motor 0 = ");
	Serial.println(outputValue0);

}
