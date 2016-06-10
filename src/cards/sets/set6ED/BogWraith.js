"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogWraith extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Wraith", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogWraith;
