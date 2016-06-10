"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging River", "Collector's Edition", "CED");
  }
}

module.exports = RagingRiver;
