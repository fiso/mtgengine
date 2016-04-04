"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatharsCrusadeBase = require("../setAVR/CatharsCrusade.js");

class CatharsCrusade extends CatharsCrusadeBase {
  constructor(game) {
    super(game, "Cathars' Crusade", "Commander 2014", "C14");
  }
}

module.exports = CatharsCrusade;
