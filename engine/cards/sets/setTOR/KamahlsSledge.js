"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamahlsSledge extends Card {
  constructor(game) {
    super(game, "Kamahl's Sledge", "Torment", "TOR");
  }
}

module.exports = KamahlsSledge;
