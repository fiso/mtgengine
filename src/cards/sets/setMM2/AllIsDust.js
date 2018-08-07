"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllIsDust extends UnimplementedCard {
  constructor (game) {
    super(game, "All Is Dust", "Modern Masters 2015", "MM2");
  }
}

module.exports = AllIsDust;
