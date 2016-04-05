"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImiStatue extends UnimplementedCard {
  constructor(game) {
    super(game, "Imi Statue", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ImiStatue;
