"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeminiEngine extends Card {
  constructor(game) {
    super(game, "Gemini Engine", "Darksteel", "DST");
  }
}

module.exports = GeminiEngine;
