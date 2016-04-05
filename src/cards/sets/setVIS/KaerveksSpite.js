"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaerveksSpite extends UnimplementedCard {
  constructor(game) {
    super(game, "Kaervek's Spite", "Visions", "VIS");
  }
}

module.exports = KaerveksSpite;
