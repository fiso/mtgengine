"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MosquitoGuardBase = require("../setDDF/MosquitoGuard.js");

class MosquitoGuard extends MosquitoGuardBase {
  constructor(game) {
    super(game, "Mosquito Guard", "Morningtide", "MOR");
  }
}

module.exports = MosquitoGuard;
