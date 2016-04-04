"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadWarchief extends UnimplementedCard {
  constructor(game) {
    super(game, "Undead Warchief", "Planechase", "HOP");
  }
}

module.exports = UndeadWarchief;
