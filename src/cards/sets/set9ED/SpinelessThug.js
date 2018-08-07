"use strict";
const Constants = require ("../../../Constants");
const SpinelessThugBase = require("../set10E/SpinelessThug");

class SpinelessThug extends SpinelessThugBase {
  constructor (game) {
    super(game, "Spineless Thug", "Ninth Edition", "9ED");
  }
}

module.exports = SpinelessThug;
