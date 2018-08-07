"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharsCrusade extends UnimplementedCard {
  constructor (game) {
    super(game, "Cathars' Crusade", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CatharsCrusade;
