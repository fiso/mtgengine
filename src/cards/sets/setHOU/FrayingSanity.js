"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrayingSanity extends UnimplementedCard {
  constructor (game) {
    super(game, "Fraying Sanity", "Hour of Devastation", "HOU");
  }
}

module.exports = FrayingSanity;
