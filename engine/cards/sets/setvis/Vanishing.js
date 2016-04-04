"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vanishing extends Card {
  constructor(game) {
    super(game, "Vanishing", "Visions", "VIS");
  }
}

module.exports = Vanishing;
