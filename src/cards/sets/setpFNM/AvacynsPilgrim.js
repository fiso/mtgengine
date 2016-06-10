"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynsPilgrim extends UnimplementedCard {
  constructor (game) {
    super(game, "Avacyn's Pilgrim", "Friday Night Magic", "pFNM");
  }
}

module.exports = AvacynsPilgrim;
