"use strict";
const Constants = require ("../../../Constants");
const TocatliHonorGuardBase = require("../setXLN/TocatliHonorGuard");

class TocatliHonorGuard extends TocatliHonorGuardBase {
  constructor (game) {
    super(game, "Tocatli Honor Guard", "Ixalan Promos", "PXLN");
  }
}

module.exports = TocatliHonorGuard;
