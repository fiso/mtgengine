"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Touch", "Avacyn Restored", "AVR");
  }
}

module.exports = GhostlyTouch;
