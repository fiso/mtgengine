"use strict";
const Constants = require ("../../../Constants");
const TheAetherFluesBase = require("../setPCA/TheAetherFlues");

class TheAetherFlues extends TheAetherFluesBase {
  constructor (game) {
    super(game, "The Aether Flues", "Planechase", "HOP");
  }
}

module.exports = TheAetherFlues;
