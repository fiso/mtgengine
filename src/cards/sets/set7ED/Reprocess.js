"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reprocess extends UnimplementedCard {
  constructor (game) {
    super(game, "Reprocess", "Seventh Edition", "7ED");
  }
}

module.exports = Reprocess;
