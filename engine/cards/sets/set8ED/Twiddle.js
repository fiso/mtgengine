"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwiddleBase = require("../setCED/Twiddle.js");

class Twiddle extends TwiddleBase {
  constructor(game) {
    super(game, "Twiddle", "Eighth Edition", "8ED");
  }
}

module.exports = Twiddle;
