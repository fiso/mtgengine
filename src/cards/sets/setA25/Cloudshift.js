"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cloudshift extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloudshift", "Masters 25", "A25");
  }
}

module.exports = Cloudshift;
