"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Siege", "Commander 2017", "C17");
  }
}

module.exports = PalaceSiege;
