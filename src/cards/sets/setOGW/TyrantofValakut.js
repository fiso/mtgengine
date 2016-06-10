"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantofValakut extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrant of Valakut", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TyrantofValakut;
