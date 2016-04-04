"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vex extends Card {
  constructor(game) {
    super(game, "Vex", "Darksteel", "DST");
  }
}

module.exports = Vex;
