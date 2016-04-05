"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Inspiring Captain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InspiringCaptain;
