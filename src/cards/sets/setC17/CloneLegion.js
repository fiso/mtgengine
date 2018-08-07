"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloneLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Clone Legion", "Commander 2017", "C17");
  }
}

module.exports = CloneLegion;
