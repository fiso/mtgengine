"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasteroftheWildHunt extends Card {
  constructor(game) {
    super(game, "Master of the Wild Hunt", "Magic 2010", "M10");
  }
}

module.exports = MasteroftheWildHunt;
