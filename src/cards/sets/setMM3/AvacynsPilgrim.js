"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynsPilgrim extends UnimplementedCard {
  constructor (game) {
    super(game, "Avacyn's Pilgrim", "Modern Masters 2017", "MM3");
  }
}

module.exports = AvacynsPilgrim;
