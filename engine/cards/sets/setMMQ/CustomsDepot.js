"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustomsDepot extends UnimplementedCard {
  constructor(game) {
    super(game, "Customs Depot", "Mercadian Masques", "MMQ");
  }
}

module.exports = CustomsDepot;
