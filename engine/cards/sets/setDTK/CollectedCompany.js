"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollectedCompany extends Card {
  constructor(game) {
    super(game, "Collected Company", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CollectedCompany;
