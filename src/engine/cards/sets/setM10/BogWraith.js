"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogWraith extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Wraith", "Magic 2010", "M10");
  }
}

module.exports = BogWraith;
