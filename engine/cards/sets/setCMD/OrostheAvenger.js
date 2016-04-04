"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrostheAvenger extends Card {
  constructor(game) {
    super(game, "Oros, the Avenger", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrostheAvenger;
