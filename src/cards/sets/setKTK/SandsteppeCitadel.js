"use strict";
const Constants = require ("../../../Constants");
const SandsteppeCitadelBase = require("../setCM2/SandsteppeCitadel");

class SandsteppeCitadel extends SandsteppeCitadelBase {
  constructor (game) {
    super(game, "Sandsteppe Citadel", "Khans of Tarkir", "KTK");
  }
}

module.exports = SandsteppeCitadel;
