"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overwhelm extends UnimplementedCard {
  constructor (game) {
    super(game, "Overwhelm", "Modern Masters 2015", "MM2");
  }
}

module.exports = Overwhelm;
