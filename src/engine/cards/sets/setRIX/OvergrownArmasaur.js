"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvergrownArmasaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Overgrown Armasaur", "Rivals of Ixalan", "RIX");
  }
}

module.exports = OvergrownArmasaur;
