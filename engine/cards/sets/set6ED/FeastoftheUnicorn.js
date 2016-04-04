"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeastoftheUnicornBase = require("../setATH/FeastoftheUnicorn.js");

class FeastoftheUnicorn extends FeastoftheUnicornBase {
  constructor(game) {
    super(game, "Feast of the Unicorn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FeastoftheUnicorn;
