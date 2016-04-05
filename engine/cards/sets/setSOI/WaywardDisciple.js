"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaywardDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Wayward Disciple", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WaywardDisciple;
