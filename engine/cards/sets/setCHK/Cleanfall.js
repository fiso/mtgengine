"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cleanfall extends UnimplementedCard {
  constructor(game) {
    super(game, "Cleanfall", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Cleanfall;
