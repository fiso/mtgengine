"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarWanderings extends Card {
  constructor(game) {
    super(game, "Far Wanderings", "Torment", "TOR");
  }
}

module.exports = FarWanderings;
