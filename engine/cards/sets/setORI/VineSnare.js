"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VineSnare extends Card {
  constructor(game) {
    super(game, "Vine Snare", "Magic Origins", "ORI");
  }
}

module.exports = VineSnare;
