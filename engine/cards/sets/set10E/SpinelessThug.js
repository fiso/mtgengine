"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinelessThugBase = require("../set8ED/SpinelessThug.js");

class SpinelessThug extends SpinelessThugBase {
  constructor(game) {
    super(game, "Spineless Thug", "Tenth Edition", "10E");
  }
}

module.exports = SpinelessThug;
