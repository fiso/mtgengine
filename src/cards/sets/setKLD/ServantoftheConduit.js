"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ServantoftheConduit extends UnimplementedCard {
  constructor (game) {
    super(game, "Servant of the Conduit", "Kaladesh", "KLD");
  }
}

module.exports = ServantoftheConduit;
