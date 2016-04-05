"use strict";
const Constants = require ("../../../Constants");
const NecrologiaBase = require("../setEXO/Necrologia");

class Necrologia extends NecrologiaBase {
  constructor(game) {
    super(game, "Necrologia", "Seventh Edition", "7ED");
  }
}

module.exports = Necrologia;
