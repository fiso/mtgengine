"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Disarm", "Mirrodin", "MRD");
  }
}

module.exports = Disarm;
