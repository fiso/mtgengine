"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogRats extends Card {
  constructor(game) {
    super(game, "Bog Rats", "Chronicles", "CHR");
  }
}

module.exports = BogRats;
