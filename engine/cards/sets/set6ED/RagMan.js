"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagMan extends Card {
  constructor(game) {
    super(game, "Rag Man", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RagMan;
