"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecraDisciple extends Card {
  constructor(game) {
    super(game, "Necra Disciple", "Apocalypse", "APC");
  }
}

module.exports = NecraDisciple;
