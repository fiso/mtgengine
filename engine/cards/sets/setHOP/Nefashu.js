"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nefashu extends UnimplementedCard {
  constructor(game) {
    super(game, "Nefashu", "Planechase", "HOP");
  }
}

module.exports = Nefashu;
