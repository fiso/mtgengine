"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Combust extends Card {
  constructor(game) {
    super(game, "Combust", "Magic 2011", "M11");
  }
}

module.exports = Combust;
