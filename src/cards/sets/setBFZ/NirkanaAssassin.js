"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NirkanaAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Nirkana Assassin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NirkanaAssassin;
