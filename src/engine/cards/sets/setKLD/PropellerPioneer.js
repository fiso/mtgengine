"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PropellerPioneer extends UnimplementedCard {
  constructor (game) {
    super(game, "Propeller Pioneer", "Kaladesh", "KLD");
  }
}

module.exports = PropellerPioneer;
