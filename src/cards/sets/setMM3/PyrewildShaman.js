"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyrewildShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyrewild Shaman", "Modern Masters 2017", "MM3");
  }
}

module.exports = PyrewildShaman;
