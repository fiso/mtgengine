"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Purge extends Card {
  constructor(game) {
    super(game, "Purge", "Darksteel", "DST");
  }
}

module.exports = Purge;
