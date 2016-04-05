"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasCradle extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Cradle", "Judge Gift Program", "pJGP");
  }
}

module.exports = GaeasCradle;
