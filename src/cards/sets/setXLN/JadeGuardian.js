"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Guardian", "Ixalan", "XLN");
  }
}

module.exports = JadeGuardian;
