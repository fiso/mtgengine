"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedFlesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Cursed Flesh", "Exodus", "EXO");
  }
}

module.exports = CursedFlesh;
