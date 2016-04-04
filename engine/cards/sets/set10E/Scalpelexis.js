"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScalpelexisBase = require("../setJUD/Scalpelexis.js");

class Scalpelexis extends ScalpelexisBase {
  constructor(game) {
    super(game, "Scalpelexis", "Tenth Edition", "10E");
  }
}

module.exports = Scalpelexis;
