"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VaporSnag extends UnimplementedCard {
  constructor (game) {
    super(game, "Vapor Snag", "Modern Masters 2015", "MM2");
  }
}

module.exports = VaporSnag;
