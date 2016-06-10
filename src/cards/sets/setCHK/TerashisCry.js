"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerashisCry extends UnimplementedCard {
  constructor (game) {
    super(game, "Terashi's Cry", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TerashisCry;
