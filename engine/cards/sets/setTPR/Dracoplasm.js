"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DracoplasmBase = require("../setTMP/Dracoplasm.js");

class Dracoplasm extends DracoplasmBase {
  constructor(game) {
    super(game, "Dracoplasm", "Tempest Remastered", "TPR");
  }
}

module.exports = Dracoplasm;
