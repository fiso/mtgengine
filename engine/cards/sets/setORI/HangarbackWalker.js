"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HangarbackWalker extends Card {
  constructor(game) {
    super(game, "Hangarback Walker", "Magic Origins", "ORI");
  }
}

module.exports = HangarbackWalker;
