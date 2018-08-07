"use strict";
const Constants = require ("../../../Constants");
const NecrologiaBase = require("../setTPR/Necrologia");

class Necrologia extends NecrologiaBase {
  constructor (game) {
    super(game, "Necrologia", "Exodus", "EXO");
  }
}

module.exports = Necrologia;
