"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasCradle extends Card {
  constructor(game) {
    super(game, "Gaea's Cradle", "Judge Gift Program", "pJGP");
  }
}

module.exports = GaeasCradle;
