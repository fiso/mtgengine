"use strict";
const Constants = require ("../../../Constants");
const NecrologiaBase = require("../setEXO/Necrologia");

class Necrologia extends NecrologiaBase {
  constructor (game) {
    super(game, "Necrologia", "Tempest Remastered", "TPR");
  }
}

module.exports = Necrologia;
