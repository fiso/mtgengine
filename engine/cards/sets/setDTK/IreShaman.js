"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IreShaman extends Card {
  constructor(game) {
    super(game, "Ire Shaman", "Dragons of Tarkir", "DTK");
  }
}

module.exports = IreShaman;
