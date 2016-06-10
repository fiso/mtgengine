"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedleSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Needle Specter", "Eventide", "EVE");
  }
}

module.exports = NeedleSpecter;
