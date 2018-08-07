"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeverReturn extends UnimplementedCard {
  constructor (game) {
    super(game, "Never // Return", "Amonkhet", "AKH");
  }
}

module.exports = NeverReturn;
