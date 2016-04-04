"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmamentCorps extends Card {
  constructor(game) {
    super(game, "Armament Corps", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArmamentCorps;
