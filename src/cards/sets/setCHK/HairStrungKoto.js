"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HairStrungKoto extends UnimplementedCard {
  constructor (game) {
    super(game, "Hair-Strung Koto", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HairStrungKoto;
