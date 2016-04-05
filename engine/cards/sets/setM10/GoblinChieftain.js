"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChieftain extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Chieftain", "Magic 2010", "M10");
  }
}

module.exports = GoblinChieftain;
