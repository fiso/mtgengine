"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnarlidPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnarlid Pack", "Modern Masters 2015", "MM2");
  }
}

module.exports = GnarlidPack;
