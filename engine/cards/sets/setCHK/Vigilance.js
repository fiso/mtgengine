"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vigilance extends Card {
  constructor(game) {
    super(game, "Vigilance", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Vigilance;
