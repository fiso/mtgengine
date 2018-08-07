"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagMan extends UnimplementedCard {
  constructor (game) {
    super(game, "Rag Man", "Seventh Edition", "7ED");
  }
}

module.exports = RagMan;
