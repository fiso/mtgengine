"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentObserver extends UnimplementedCard {
  constructor(game) {
    super(game, "Silent Observer", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SilentObserver;
