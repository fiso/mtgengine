"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recover extends UnimplementedCard {
  constructor (game) {
    super(game, "Recover", "Invasion", "INV");
  }
}

module.exports = Recover;
