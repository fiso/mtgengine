"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImperialEdict extends Card {
  constructor(game) {
    super(game, "Imperial Edict", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialEdict;
