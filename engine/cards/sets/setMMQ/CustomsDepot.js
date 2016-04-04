"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CustomsDepot extends Card {
  constructor(game) {
    super(game, "Customs Depot", "Mercadian Masques", "MMQ");
  }
}

module.exports = CustomsDepot;
