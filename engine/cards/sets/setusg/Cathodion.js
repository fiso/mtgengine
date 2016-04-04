"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CathodionBase = require("../setC14/Cathodion.js");

class Cathodion extends CathodionBase {
  constructor(game) {
    super(game, "Cathodion", "Urza's Saga", "USG");
  }
}

module.exports = Cathodion;
