"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shrivel extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrivel", "Modern Masters 2015", "MM2");
  }
}

module.exports = Shrivel;
