"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrieking Specter", "Starter 1999", "S99");
  }
}

module.exports = ShriekingSpecter;
