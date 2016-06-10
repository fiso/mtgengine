"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenerPastures extends UnimplementedCard {
  constructor (game) {
    super(game, "Greener Pastures", "Urza's Saga", "USG");
  }
}

module.exports = GreenerPastures;
