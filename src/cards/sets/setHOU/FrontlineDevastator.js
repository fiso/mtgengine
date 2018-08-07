"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontlineDevastator extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontline Devastator", "Hour of Devastation", "HOU");
  }
}

module.exports = FrontlineDevastator;
