"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherealHaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethereal Haze", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EtherealHaze;
