"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingMinotaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Raging Minotaur", "Masters Edition III", "ME3");
  }
}

module.exports = RagingMinotaur;
