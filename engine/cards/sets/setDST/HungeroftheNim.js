"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HungeroftheNim extends Card {
  constructor(game) {
    super(game, "Hunger of the Nim", "Darksteel", "DST");
  }
}

module.exports = HungeroftheNim;
