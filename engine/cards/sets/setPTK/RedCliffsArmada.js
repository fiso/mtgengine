"use strict";
const Constants = require ("../../../Constants");
const RedCliffsArmadaBase = require("../setME2/RedCliffsArmada");

class RedCliffsArmada extends RedCliffsArmadaBase {
  constructor(game) {
    super(game, "Red Cliffs Armada", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RedCliffsArmada;
