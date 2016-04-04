"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DegaDisciple extends Card {
  constructor(game) {
    super(game, "Dega Disciple", "Apocalypse", "APC");
  }
}

module.exports = DegaDisciple;
