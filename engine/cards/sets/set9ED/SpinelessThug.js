"use strict";
const Constants = require ("../../../Constants");
const SpinelessThugBase = require("../set8ED/SpinelessThug");

class SpinelessThug extends SpinelessThugBase {
  constructor(game) {
    super(game, "Spineless Thug", "Ninth Edition", "9ED");
  }
}

module.exports = SpinelessThug;
