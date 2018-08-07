"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaHounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Hounds", "Eighth Edition", "8ED");
  }
}

module.exports = LavaHounds;
