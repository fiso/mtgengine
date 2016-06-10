"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Assault extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault", "Invasion", "INV");
  }
}

module.exports = Assault;
