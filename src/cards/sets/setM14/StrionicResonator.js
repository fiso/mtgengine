"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrionicResonator extends UnimplementedCard {
  constructor(game) {
    super(game, "Strionic Resonator", "Magic 2014 Core Set", "M14");
  }
}

module.exports = StrionicResonator;
