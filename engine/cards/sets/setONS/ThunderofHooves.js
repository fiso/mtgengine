"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderofHooves extends Card {
  constructor(game) {
    super(game, "Thunder of Hooves", "Onslaught", "ONS");
  }
}

module.exports = ThunderofHooves;
