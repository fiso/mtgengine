"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ruination extends Card {
  constructor(game) {
    super(game, "Ruination", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Ruination;
