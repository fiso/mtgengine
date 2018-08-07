"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthshakerKhenra extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthshaker Khenra", "Hour of Devastation", "HOU");
  }
}

module.exports = EarthshakerKhenra;
