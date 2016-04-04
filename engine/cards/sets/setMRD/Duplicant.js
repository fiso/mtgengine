"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuplicantBase = require("../setARC/Duplicant.js");

class Duplicant extends DuplicantBase {
  constructor(game) {
    super(game, "Duplicant", "Mirrodin", "MRD");
  }
}

module.exports = Duplicant;
