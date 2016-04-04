"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeminiEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Gemini Engine", "Darksteel", "DST");
  }
}

module.exports = GeminiEngine;
