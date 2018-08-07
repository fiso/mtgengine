"use strict";
const Constants = require ("../../../Constants");
const ConquerBase = require("../setME2/Conquer");

class Conquer extends ConquerBase {
  constructor (game) {
    super(game, "Conquer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Conquer;
