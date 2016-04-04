"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soulscour extends Card {
  constructor(game) {
    super(game, "Soulscour", "Darksteel", "DST");
  }
}

module.exports = Soulscour;
