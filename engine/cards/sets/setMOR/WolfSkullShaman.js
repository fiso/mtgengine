"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolfSkullShaman extends Card {
  constructor(game) {
    super(game, "Wolf-Skull Shaman", "Morningtide", "MOR");
  }
}

module.exports = WolfSkullShaman;
