"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshdrinkerGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Marshdrinker Giant", "Eventide", "EVE");
  }
}

module.exports = MarshdrinkerGiant;
