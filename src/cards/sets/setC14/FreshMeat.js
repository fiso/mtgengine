"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreshMeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Fresh Meat", "Commander 2014", "C14");
  }
}

module.exports = FreshMeat;
