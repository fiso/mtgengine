"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VassalsDuty extends Card {
  constructor(game) {
    super(game, "Vassal's Duty", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VassalsDuty;
