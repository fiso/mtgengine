"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwiddleBase = require("../setCED/Twiddle.js");

class Twiddle extends TwiddleBase {
  constructor(game) {
    super(game, "Twiddle", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Twiddle;
