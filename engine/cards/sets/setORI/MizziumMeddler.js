"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MizziumMeddler extends Card {
  constructor(game) {
    super(game, "Mizzium Meddler", "Magic Origins", "ORI");
  }
}

module.exports = MizziumMeddler;
