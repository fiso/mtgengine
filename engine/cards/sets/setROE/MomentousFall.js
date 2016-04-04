"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentousFall extends UnimplementedCard {
  constructor(game) {
    super(game, "Momentous Fall", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MomentousFall;
