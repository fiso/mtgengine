"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatharsCrusade extends Card {
  constructor(game) {
    super(game, "Cathars' Crusade", "Avacyn Restored", "AVR");
  }
}

module.exports = CatharsCrusade;
