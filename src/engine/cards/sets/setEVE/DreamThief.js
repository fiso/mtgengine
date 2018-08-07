"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Thief", "Eventide", "EVE");
  }
}

module.exports = DreamThief;
