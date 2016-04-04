"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EightandaHalfTails extends Card {
  constructor(game) {
    super(game, "Eight-and-a-Half-Tails", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EightandaHalfTails;
