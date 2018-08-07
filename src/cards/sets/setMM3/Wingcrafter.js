"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wingcrafter extends UnimplementedCard {
  constructor (game) {
    super(game, "Wingcrafter", "Modern Masters 2017", "MM3");
  }
}

module.exports = Wingcrafter;
