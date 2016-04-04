"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Beast", "Magic 2011", "M11");
  }
}

module.exports = PhantomBeast;
