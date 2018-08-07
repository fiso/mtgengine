"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedTrauma extends UnimplementedCard {
  constructor (game) {
    super(game, "Shared Trauma", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SharedTrauma;
