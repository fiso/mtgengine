"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalliationAccord extends UnimplementedCard {
  constructor(game) {
    super(game, "Palliation Accord", "Dissension", "DIS");
  }
}

module.exports = PalliationAccord;
