"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MuckRats extends Card {
  constructor(game) {
    super(game, "Muck Rats", "Portal", "POR");
  }
}

module.exports = MuckRats;
