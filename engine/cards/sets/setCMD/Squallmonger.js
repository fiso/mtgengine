"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Squallmonger extends Card {
  constructor(game) {
    super(game, "Squallmonger", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Squallmonger;
