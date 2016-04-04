"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevouringRage extends Card {
  constructor(game) {
    super(game, "Devouring Rage", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevouringRage;
