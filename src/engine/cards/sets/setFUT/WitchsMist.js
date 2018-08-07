"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchsMist extends UnimplementedCard {
  constructor (game) {
    super(game, "Witch's Mist", "Future Sight", "FUT");
  }
}

module.exports = WitchsMist;
