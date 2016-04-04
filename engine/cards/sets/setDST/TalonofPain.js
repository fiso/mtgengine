"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalonofPain extends Card {
  constructor(game) {
    super(game, "Talon of Pain", "Darksteel", "DST");
  }
}

module.exports = TalonofPain;
