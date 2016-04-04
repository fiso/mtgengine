"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GethsGrimoire extends Card {
  constructor(game) {
    super(game, "Geth's Grimoire", "Darksteel", "DST");
  }
}

module.exports = GethsGrimoire;
