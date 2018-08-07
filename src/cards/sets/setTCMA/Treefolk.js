"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Treefolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Treefolk", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Treefolk;
