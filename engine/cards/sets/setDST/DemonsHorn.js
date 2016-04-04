"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonsHorn extends Card {
  constructor(game) {
    super(game, "Demon's Horn", "Darksteel", "DST");
  }
}

module.exports = DemonsHorn;
