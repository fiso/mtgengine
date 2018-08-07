"use strict";
const Constants = require ("../../../Constants");
const SeraphBase = require("../setMED/Seraph");

class Seraph extends SeraphBase {
  constructor (game) {
    super(game, "Seraph", "Ice Age", "ICE");
  }
}

module.exports = Seraph;
