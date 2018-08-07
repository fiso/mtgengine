"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleHierarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Hierarch", "Modern Masters 2015", "MM2");
  }
}

module.exports = NobleHierarch;
