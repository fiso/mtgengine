"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bind extends UnimplementedCard {
  constructor (game) {
    super(game, "Bind", "Invasion", "INV");
  }
}

module.exports = Bind;
