"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScornfulEgotist extends Card {
  constructor(game) {
    super(game, "Scornful Egotist", "Scourge", "SCG");
  }
}

module.exports = ScornfulEgotist;
