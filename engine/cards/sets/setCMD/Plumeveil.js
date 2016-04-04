"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Plumeveil extends Card {
  constructor(game) {
    super(game, "Plumeveil", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Plumeveil;
