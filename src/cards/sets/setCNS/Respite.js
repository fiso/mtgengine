"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Respite extends UnimplementedCard {
  constructor (game) {
    super(game, "Respite", "Conspiracy", "CNS");
  }
}

module.exports = Respite;
