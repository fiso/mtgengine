"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoongloveChangeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonglove Changeling", "Morningtide", "MOR");
  }
}

module.exports = MoongloveChangeling;
