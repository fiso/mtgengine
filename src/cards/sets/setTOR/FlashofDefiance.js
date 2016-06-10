"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashofDefiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash of Defiance", "Torment", "TOR");
  }
}

module.exports = FlashofDefiance;
