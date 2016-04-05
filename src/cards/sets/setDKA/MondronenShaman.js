"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MondronenShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Mondronen Shaman", "Dark Ascension", "DKA");
  }
}

module.exports = MondronenShaman;
