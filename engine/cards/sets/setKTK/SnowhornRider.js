"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowhornRider extends Card {
  constructor(game) {
    super(game, "Snowhorn Rider", "Khans of Tarkir", "KTK");
  }
}

module.exports = SnowhornRider;
