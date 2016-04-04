"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VialofPoison extends Card {
  constructor(game) {
    super(game, "Vial of Poison", "Magic 2014 Core Set", "M14");
  }
}

module.exports = VialofPoison;
