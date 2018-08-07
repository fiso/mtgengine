"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Offering", "Starter 1999", "S99");
  }
}

module.exports = DarkOffering;
