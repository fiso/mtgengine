"use strict";
const Constants = require ("../../../Constants");
const CathodionBase = require("../setC14/Cathodion");

class Cathodion extends CathodionBase {
  constructor (game) {
    super(game, "Cathodion", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Cathodion;
