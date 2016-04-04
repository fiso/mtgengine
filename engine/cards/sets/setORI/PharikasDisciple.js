"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PharikasDisciple extends Card {
  constructor(game) {
    super(game, "Pharika's Disciple", "Magic Origins", "ORI");
  }
}

module.exports = PharikasDisciple;
