"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedCliffsArmadaBase = require("../setME2/RedCliffsArmada.js");

class RedCliffsArmada extends RedCliffsArmadaBase {
  constructor(game) {
    super(game, "Red Cliffs Armada", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RedCliffsArmada;
