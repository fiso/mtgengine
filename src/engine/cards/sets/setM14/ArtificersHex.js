"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtificersHex extends UnimplementedCard {
  constructor (game) {
    super(game, "Artificer's Hex", "Magic 2014", "M14");
  }
}

module.exports = ArtificersHex;
