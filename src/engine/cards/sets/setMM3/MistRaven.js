"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistRaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Mist Raven", "Modern Masters 2017", "MM3");
  }
}

module.exports = MistRaven;
