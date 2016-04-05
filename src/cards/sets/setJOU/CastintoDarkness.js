"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastintoDarkness extends UnimplementedCard {
  constructor(game) {
    super(game, "Cast into Darkness", "Journey into Nyx", "JOU");
  }
}

module.exports = CastintoDarkness;
