"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntingApparition extends Card {
  constructor(game) {
    super(game, "Haunting Apparition", "Mirage", "MIR");
  }
}

module.exports = HauntingApparition;
