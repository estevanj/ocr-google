'use strict'

async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision')

  // Creates a client
  const client = new vision.ImageAnnotatorClient()

  /**
   * LLamo el archivo que deseo obtener su texto
   */
  const fileName = './cedula.jpg'

  // Performs text detection on the local file
  const [result] = await client.textDetection(fileName)
  const detections = result.textAnnotations
  console.log('Text:')
  detections.forEach((text) => console.log(text))

  const fs = require('fs')

  //Guarda en un json , cambiar nombre
  let data = JSON.stringify(detections)
  fs.writeFileSync('cedula.json', data)
}

quickstart()
