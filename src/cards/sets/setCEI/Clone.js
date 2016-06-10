"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor (game) {
    super(game, "Clone", "International Collector's Edition", "CEI");
  }
}

module.exports = Clone;
