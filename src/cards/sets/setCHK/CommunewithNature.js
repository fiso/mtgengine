"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommunewithNature extends UnimplementedCard {
  constructor (game) {
    super(game, "Commune with Nature", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CommunewithNature;
