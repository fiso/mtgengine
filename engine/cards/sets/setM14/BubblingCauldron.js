"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BubblingCauldron extends UnimplementedCard {
  constructor(game) {
    super(game, "Bubbling Cauldron", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BubblingCauldron;
