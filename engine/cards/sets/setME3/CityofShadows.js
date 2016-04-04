"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CityofShadows extends Card {
  constructor(game) {
    super(game, "City of Shadows", "Masters Edition III", "ME3");
  }
}

module.exports = CityofShadows;
