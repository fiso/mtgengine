"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duskwalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Duskwalker", "Invasion", "INV");
  }
}

module.exports = Duskwalker;
