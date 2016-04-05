"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarbleChalice extends UnimplementedCard {
  constructor(game) {
    super(game, "Marble Chalice", "Shards of Alara", "ALA");
  }
}

module.exports = MarbleChalice;
