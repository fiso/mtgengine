"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirCutpurseBase = require("../setDDH/DimirCutpurse.js");

class DimirCutpurse extends DimirCutpurseBase {
  constructor(game) {
    super(game, "Dimir Cutpurse", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirCutpurse;
