"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NessianWildsRavagerBase = require("../setBNG/NessianWildsRavager.js");

class NessianWildsRavager extends NessianWildsRavagerBase {
  constructor(game) {
    super(game, "Nessian Wilds Ravager", "Prerelease Events", "pPRE");
  }
}

module.exports = NessianWildsRavager;
