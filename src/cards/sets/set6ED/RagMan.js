"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagMan extends UnimplementedCard {
  constructor (game) {
    super(game, "Rag Man", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RagMan;
