"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Deliver", "Invasion", "INV");
  }
}

module.exports = Deliver;
