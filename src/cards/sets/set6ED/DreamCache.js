"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamCache extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Cache", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DreamCache;
