"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrochiHatchery extends UnimplementedCard {
  constructor (game) {
    super(game, "Orochi Hatchery", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrochiHatchery;
