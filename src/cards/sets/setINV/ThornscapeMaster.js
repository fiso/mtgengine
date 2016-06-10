"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornscapeMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornscape Master", "Invasion", "INV");
  }
}

module.exports = ThornscapeMaster;
