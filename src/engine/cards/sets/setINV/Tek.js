"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tek extends UnimplementedCard {
  constructor (game) {
    super(game, "Tek", "Invasion", "INV");
  }
}

module.exports = Tek;
