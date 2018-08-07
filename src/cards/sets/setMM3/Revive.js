"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Revive extends UnimplementedCard {
  constructor (game) {
    super(game, "Revive", "Modern Masters 2017", "MM3");
  }
}

module.exports = Revive;
