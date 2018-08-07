"use strict";
const Constants = require ("../../../Constants");
const MathasFiendSeekerBase = require("../setC17/MathasFiendSeeker");

class MathasFiendSeeker extends MathasFiendSeekerBase {
  constructor (game) {
    super(game, "Mathas, Fiend Seeker", "You Make the Cube", "PZ2");
  }
}

module.exports = MathasFiendSeeker;
