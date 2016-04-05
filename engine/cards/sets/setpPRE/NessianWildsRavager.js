"use strict";
const Constants = require ("../../../Constants");
const NessianWildsRavagerBase = require("../setBNG/NessianWildsRavager");

class NessianWildsRavager extends NessianWildsRavagerBase {
  constructor(game) {
    super(game, "Nessian Wilds Ravager", "Prerelease Events", "pPRE");
  }
}

module.exports = NessianWildsRavager;
