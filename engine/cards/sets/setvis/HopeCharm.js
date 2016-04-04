"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HopeCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Hope Charm", "Visions", "VIS");
  }
}

module.exports = HopeCharm;
