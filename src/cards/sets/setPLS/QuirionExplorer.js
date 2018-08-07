"use strict";
const Constants = require ("../../../Constants");
const QuirionExplorerBase = require("../setC16/QuirionExplorer");

class QuirionExplorer extends QuirionExplorerBase {
  constructor (game) {
    super(game, "Quirion Explorer", "Planeshift", "PLS");
  }
}

module.exports = QuirionExplorer;
