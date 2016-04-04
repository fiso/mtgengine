"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConiferStrider extends Card {
  constructor(game) {
    super(game, "Conifer Strider", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ConiferStrider;
