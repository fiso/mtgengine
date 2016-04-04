"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CetaDisciple extends Card {
  constructor(game) {
    super(game, "Ceta Disciple", "Apocalypse", "APC");
  }
}

module.exports = CetaDisciple;
