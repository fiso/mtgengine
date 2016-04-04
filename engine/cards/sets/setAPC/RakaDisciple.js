"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakaDisciple extends Card {
  constructor(game) {
    super(game, "Raka Disciple", "Apocalypse", "APC");
  }
}

module.exports = RakaDisciple;
