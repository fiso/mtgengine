"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NineRingedBo extends UnimplementedCard {
  constructor (game) {
    super(game, "Nine-Ringed Bo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NineRingedBo;
