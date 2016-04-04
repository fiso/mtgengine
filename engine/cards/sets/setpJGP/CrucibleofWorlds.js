"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrucibleofWorldsBase = require("../set5DN/CrucibleofWorlds.js");

class CrucibleofWorlds extends CrucibleofWorldsBase {
  constructor(game) {
    super(game, "Crucible of Worlds", "Judge Gift Program", "pJGP");
  }
}

module.exports = CrucibleofWorlds;
