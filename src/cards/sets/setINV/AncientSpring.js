"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientSpring extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Spring", "Invasion", "INV");
  }
}

module.exports = AncientSpring;
