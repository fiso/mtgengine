"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiremaneAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Firemane Avenger", "Gatecrash", "GTC");
  }
}

module.exports = FiremaneAvenger;
