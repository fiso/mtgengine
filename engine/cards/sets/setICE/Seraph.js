"use strict";
const Constants = require ("../../../Constants");
const SeraphBase = require("../set5ED/Seraph");

class Seraph extends SeraphBase {
  constructor(game) {
    super(game, "Seraph", "Ice Age", "ICE");
  }
}

module.exports = Seraph;
