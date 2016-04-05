"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritenDal extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit en-Dal", "Future Sight", "FUT");
  }
}

module.exports = SpiritenDal;
