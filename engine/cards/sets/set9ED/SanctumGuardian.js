"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SanctumGuardianBase = require("../setBRB/SanctumGuardian.js");

class SanctumGuardian extends SanctumGuardianBase {
  constructor(game) {
    super(game, "Sanctum Guardian", "Ninth Edition", "9ED");
  }
}

module.exports = SanctumGuardian;
