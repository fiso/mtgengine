"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BubblingCauldron extends UnimplementedCard {
  constructor (game) {
    super(game, "Bubbling Cauldron", "Iconic Masters", "IMA");
  }
}

module.exports = BubblingCauldron;
