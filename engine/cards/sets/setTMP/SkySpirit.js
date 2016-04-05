"use strict";
const Constants = require ("../../../Constants");
const SkySpiritBase = require("../setDDI/SkySpirit");

class SkySpirit extends SkySpiritBase {
  constructor(game) {
    super(game, "Sky Spirit", "Tempest", "TMP");
  }
}

module.exports = SkySpirit;
