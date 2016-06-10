"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Offering", "Chronicles", "CHR");
  }
}

module.exports = DivineOffering;
