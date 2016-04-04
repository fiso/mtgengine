"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlasmCaptureBase = require("../setDGM/PlasmCapture.js");

class PlasmCapture extends PlasmCaptureBase {
  constructor(game) {
    super(game, "Plasm Capture", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PlasmCapture;
