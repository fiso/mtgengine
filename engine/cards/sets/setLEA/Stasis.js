"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StasisBase = require("../setCED/Stasis.js");

class Stasis extends StasisBase {
  constructor(game) {
    super(game, "Stasis", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Stasis;
