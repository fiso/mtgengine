"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiftstonePortal extends Card {
  constructor(game) {
    super(game, "Riftstone Portal", "Judgment", "JUD");
  }
}

module.exports = RiftstonePortal;
