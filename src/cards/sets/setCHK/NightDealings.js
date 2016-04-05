"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightDealings extends UnimplementedCard {
  constructor(game) {
    super(game, "Night Dealings", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NightDealings;
