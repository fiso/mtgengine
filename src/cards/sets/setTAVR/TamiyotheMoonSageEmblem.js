"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TamiyotheMoonSageEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tamiyo, the Moon Sage Emblem", "Avacyn Restored Tokens", "TAVR");
  }
}

module.exports = TamiyotheMoonSageEmblem;
