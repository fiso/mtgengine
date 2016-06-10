"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootGreevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Greevil", "Planeshift", "PLS");
  }
}

module.exports = RootGreevil;
