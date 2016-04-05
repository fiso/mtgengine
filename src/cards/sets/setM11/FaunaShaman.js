"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaunaShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Fauna Shaman", "Magic 2011", "M11");
  }
}

module.exports = FaunaShaman;
