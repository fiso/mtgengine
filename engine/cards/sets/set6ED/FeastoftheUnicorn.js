"use strict";
const Constants = require ("../../../Constants");
const FeastoftheUnicornBase = require("../setATH/FeastoftheUnicorn");

class FeastoftheUnicorn extends FeastoftheUnicornBase {
  constructor(game) {
    super(game, "Feast of the Unicorn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FeastoftheUnicorn;
