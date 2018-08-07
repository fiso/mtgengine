"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeastofFlesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Feast of Flesh", "Coldsnap", "CSP");
  }
}

module.exports = FeastofFlesh;
