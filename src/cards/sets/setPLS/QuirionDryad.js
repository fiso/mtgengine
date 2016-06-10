"use strict";
const Constants = require ("../../../Constants");
const QuirionDryadBase = require("../setM13/QuirionDryad");

class QuirionDryad extends QuirionDryadBase {
  constructor (game) {
    super(game, "Quirion Dryad", "Planeshift", "PLS");
  }
}

module.exports = QuirionDryad;
