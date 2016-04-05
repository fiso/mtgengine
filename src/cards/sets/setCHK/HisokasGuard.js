"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HisokasGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Hisoka's Guard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HisokasGuard;
