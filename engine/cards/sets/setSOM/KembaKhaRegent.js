"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KembaKhaRegentBase = require("../setC14/KembaKhaRegent.js");

class KembaKhaRegent extends KembaKhaRegentBase {
  constructor(game) {
    super(game, "Kemba, Kha Regent", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KembaKhaRegent;
