"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StuffyDoll extends Card {
  constructor(game) {
    super(game, "Stuffy Doll", "Magic 2013", "M13");
  }
}

module.exports = StuffyDoll;
