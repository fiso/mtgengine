"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaywardDisciple extends Card {
  constructor(game) {
    super(game, "Wayward Disciple", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WaywardDisciple;
