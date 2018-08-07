"use strict";
const Constants = require ("../../../Constants");
const CatharsCrusadeBase = require("../setCM2/CatharsCrusade");

class CatharsCrusade extends CatharsCrusadeBase {
  constructor (game) {
    super(game, "Cathars' Crusade", "Avacyn Restored", "AVR");
  }
}

module.exports = CatharsCrusade;
