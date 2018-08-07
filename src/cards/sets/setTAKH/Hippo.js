"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hippo extends UnimplementedCard {
  constructor (game) {
    super(game, "Hippo", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = Hippo;
