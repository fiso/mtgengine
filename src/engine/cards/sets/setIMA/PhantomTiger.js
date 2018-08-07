"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Tiger", "Iconic Masters", "IMA");
  }
}

module.exports = PhantomTiger;
