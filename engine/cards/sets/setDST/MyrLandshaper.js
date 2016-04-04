"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrLandshaper extends Card {
  constructor(game) {
    super(game, "Myr Landshaper", "Darksteel", "DST");
  }
}

module.exports = MyrLandshaper;
