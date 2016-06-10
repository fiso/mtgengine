"use strict";
const Constants = require ("../../../Constants");
const ConquerBase = require("../set6ED/Conquer");

class Conquer extends ConquerBase {
  constructor (game) {
    super(game, "Conquer", "Ice Age", "ICE");
  }
}

module.exports = Conquer;
