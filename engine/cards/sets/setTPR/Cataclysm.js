"use strict";
const Constants = require ("../../../Constants");
const CataclysmBase = require("../setEXO/Cataclysm");

class Cataclysm extends CataclysmBase {
  constructor(game) {
    super(game, "Cataclysm", "Tempest Remastered", "TPR");
  }
}

module.exports = Cataclysm;
