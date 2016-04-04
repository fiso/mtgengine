"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Warbringer extends Card {
  constructor(game) {
    super(game, "Warbringer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Warbringer;
