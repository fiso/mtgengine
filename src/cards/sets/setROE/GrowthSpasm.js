"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrowthSpasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Growth Spasm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GrowthSpasm;
