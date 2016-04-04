"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Revenant extends Card {
  constructor(game) {
    super(game, "Revenant", "Magic Origins", "ORI");
  }
}

module.exports = Revenant;
