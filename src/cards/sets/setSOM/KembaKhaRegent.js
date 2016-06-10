"use strict";
const Constants = require ("../../../Constants");
const KembaKhaRegentBase = require("../setC14/KembaKhaRegent");

class KembaKhaRegent extends KembaKhaRegentBase {
  constructor (game) {
    super(game, "Kemba, Kha Regent", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KembaKhaRegent;
