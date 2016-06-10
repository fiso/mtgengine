"use strict";
const Constants = require ("../../../Constants");
const TurntimberBasiliskBase = require("../setDDP/TurntimberBasilisk");

class TurntimberBasilisk extends TurntimberBasiliskBase {
  constructor (game) {
    super(game, "Turntimber Basilisk", "Zendikar", "ZEN");
  }
}

module.exports = TurntimberBasilisk;
