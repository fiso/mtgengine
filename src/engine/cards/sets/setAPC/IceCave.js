"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceCave extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Cave", "Apocalypse", "APC");
  }
}

module.exports = IceCave;
