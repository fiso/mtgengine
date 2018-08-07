"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyFlicker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Flicker", "Modern Masters 2017", "MM3");
  }
}

module.exports = GhostlyFlicker;
