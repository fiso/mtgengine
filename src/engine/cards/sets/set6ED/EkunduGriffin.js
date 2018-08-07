"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EkunduGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Ekundu Griffin", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EkunduGriffin;
