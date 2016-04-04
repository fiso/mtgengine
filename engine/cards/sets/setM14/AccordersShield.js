"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccordersShield extends Card {
  constructor(game) {
    super(game, "Accorder's Shield", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AccordersShield;
