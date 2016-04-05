"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyFlicker extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghostly Flicker", "Avacyn Restored", "AVR");
  }
}

module.exports = GhostlyFlicker;
