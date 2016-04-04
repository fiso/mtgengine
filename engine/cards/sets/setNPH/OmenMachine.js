"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OmenMachine extends Card {
  constructor(game) {
    super(game, "Omen Machine", "New Phyrexia", "NPH");
  }
}

module.exports = OmenMachine;
