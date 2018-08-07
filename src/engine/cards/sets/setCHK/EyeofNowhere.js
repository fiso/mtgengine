"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeofNowhere extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye of Nowhere", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EyeofNowhere;
