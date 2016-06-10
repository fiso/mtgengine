"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KelinoreBat extends UnimplementedCard {
  constructor (game) {
    super(game, "Kelinore Bat", "Magic 2010", "M10");
  }
}

module.exports = KelinoreBat;
