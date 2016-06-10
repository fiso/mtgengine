"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LocustMiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Locust Miser", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = LocustMiser;
