"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IchorclawMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Ichorclaw Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IchorclawMyr;
