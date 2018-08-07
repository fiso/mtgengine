"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesasSmuggler extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa's Smuggler", "Conspiracy", "CNS");
  }
}

module.exports = MarchesasSmuggler;
