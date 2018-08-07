"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurboThwackingAutoHammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Turbo-Thwacking Auto-Hammer", "Unstable", "UST");
  }
}

module.exports = TurboThwackingAutoHammer;
