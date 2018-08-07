"use strict";
const Constants = require ("../../../Constants");
const ShrinkBase = require("../setME2/Shrink");

class Shrink extends ShrinkBase {
  constructor (game) {
    super(game, "Shrink", "Fifth Edition", "5ED");
  }
}

module.exports = Shrink;
