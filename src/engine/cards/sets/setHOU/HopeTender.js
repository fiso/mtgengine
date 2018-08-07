"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HopeTender extends UnimplementedCard {
  constructor (game) {
    super(game, "Hope Tender", "Hour of Devastation", "HOU");
  }
}

module.exports = HopeTender;
