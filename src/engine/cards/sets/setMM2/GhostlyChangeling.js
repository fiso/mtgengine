"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyChangeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Changeling", "Modern Masters 2015", "MM2");
  }
}

module.exports = GhostlyChangeling;
