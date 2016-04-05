"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mourning extends UnimplementedCard {
  constructor(game) {
    super(game, "Mourning", "Invasion", "INV");
  }
}

module.exports = Mourning;
