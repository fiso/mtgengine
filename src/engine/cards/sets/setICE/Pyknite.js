"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyknite extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyknite", "Ice Age", "ICE");
  }
}

module.exports = Pyknite;
