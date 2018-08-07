"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverfallMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Riverfall Mimic", "Eventide", "EVE");
  }
}

module.exports = RiverfallMimic;
