"use strict";
const Constants = require ("../../../Constants");
const RemedyBase = require("../set6ED/Remedy");

class Remedy extends RemedyBase {
  constructor(game) {
    super(game, "Remedy", "Visions", "VIS");
  }
}

module.exports = Remedy;
