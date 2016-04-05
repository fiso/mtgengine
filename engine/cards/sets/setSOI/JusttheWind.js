"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JusttheWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Just the Wind", "Shadows over Innistrad", "SOI");
  }
}

module.exports = JusttheWind;
