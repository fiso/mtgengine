"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Void extends UnimplementedCard {
  constructor(game) {
    super(game, "Void", "Invasion", "INV");
  }
}

module.exports = Void;
