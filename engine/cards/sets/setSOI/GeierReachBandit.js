"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeierReachBandit extends UnimplementedCard {
  constructor(game) {
    super(game, "Geier Reach Bandit", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GeierReachBandit;
