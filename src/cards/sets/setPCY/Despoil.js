"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Despoil extends UnimplementedCard {
  constructor (game) {
    super(game, "Despoil", "Prophecy", "PCY");
  }
}

module.exports = Despoil;
