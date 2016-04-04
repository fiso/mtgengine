"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterveilCavern extends Card {
  constructor(game) {
    super(game, "Waterveil Cavern", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WaterveilCavern;
