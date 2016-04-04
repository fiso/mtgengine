"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarmogoyfBase = require("../setFUT/Tarmogoyf.js");

class Tarmogoyf extends TarmogoyfBase {
  constructor(game) {
    super(game, "Tarmogoyf", "Modern Masters", "MMA");
  }
}

module.exports = Tarmogoyf;
