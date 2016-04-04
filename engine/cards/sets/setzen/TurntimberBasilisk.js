"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurntimberBasiliskBase = require("../setDDP/TurntimberBasilisk.js");

class TurntimberBasilisk extends TurntimberBasiliskBase {
  constructor(game) {
    super(game, "Turntimber Basilisk", "Zendikar", "ZEN");
  }
}

module.exports = TurntimberBasilisk;
