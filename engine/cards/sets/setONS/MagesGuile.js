"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagesGuile extends Card {
  constructor(game) {
    super(game, "Mage's Guile", "Onslaught", "ONS");
  }
}

module.exports = MagesGuile;
