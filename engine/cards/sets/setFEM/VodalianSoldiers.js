"use strict";
const Constants = require ("../../../Constants");
const VodalianSoldiersBase = require("../set6ED/VodalianSoldiers");

class VodalianSoldiers extends VodalianSoldiersBase {
  constructor(game) {
    super(game, "Vodalian Soldiers", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianSoldiers;
