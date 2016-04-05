"use strict";
const Constants = require ("../../../Constants");
const MosquitoGuardBase = require("../setDDF/MosquitoGuard");

class MosquitoGuard extends MosquitoGuardBase {
  constructor(game) {
    super(game, "Mosquito Guard", "Morningtide", "MOR");
  }
}

module.exports = MosquitoGuard;
