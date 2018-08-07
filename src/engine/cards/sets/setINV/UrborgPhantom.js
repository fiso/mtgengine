"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgPhantom extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg Phantom", "Invasion", "INV");
  }
}

module.exports = UrborgPhantom;
