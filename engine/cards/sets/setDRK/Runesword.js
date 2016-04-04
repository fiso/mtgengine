"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuneswordBase = require("../setCHR/Runesword.js");

class Runesword extends RuneswordBase {
  constructor(game) {
    super(game, "Runesword", "The Dark", "DRK");
  }
}

module.exports = Runesword;
