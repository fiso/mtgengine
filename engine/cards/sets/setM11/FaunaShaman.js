"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaunaShaman extends Card {
  constructor(game) {
    super(game, "Fauna Shaman", "Magic 2011", "M11");
  }
}

module.exports = FaunaShaman;
