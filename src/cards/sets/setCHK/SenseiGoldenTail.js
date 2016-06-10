"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SenseiGoldenTail extends UnimplementedCard {
  constructor (game) {
    super(game, "Sensei Golden-Tail", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SenseiGoldenTail;
