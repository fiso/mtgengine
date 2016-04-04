"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharsCrusade extends UnimplementedCard {
  constructor(game) {
    super(game, "Cathars' Crusade", "Avacyn Restored", "AVR");
  }
}

module.exports = CatharsCrusade;
