"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging Kavu", "Magic Online Promos", "PRM");
  }
}

module.exports = RagingKavu;
