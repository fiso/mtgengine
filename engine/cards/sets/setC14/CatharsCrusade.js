"use strict";
const Constants = require ("../../../Constants");
const CatharsCrusadeBase = require("../setAVR/CatharsCrusade");

class CatharsCrusade extends CatharsCrusadeBase {
  constructor(game) {
    super(game, "Cathars' Crusade", "Commander 2014", "C14");
  }
}

module.exports = CatharsCrusade;
