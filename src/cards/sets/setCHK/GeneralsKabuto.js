"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneralsKabuto extends UnimplementedCard {
  constructor(game) {
    super(game, "General's Kabuto", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GeneralsKabuto;
