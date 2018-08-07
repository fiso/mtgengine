"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Timetwister extends UnimplementedCard {
  constructor (game) {
    super(game, "Timetwister", "Vintage Masters", "VMA");
  }
}

module.exports = Timetwister;
