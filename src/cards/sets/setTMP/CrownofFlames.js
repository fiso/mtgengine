"use strict";
const Constants = require ("../../../Constants");
const CrownofFlamesBase = require("../setINV/CrownofFlames");

class CrownofFlames extends CrownofFlamesBase {
  constructor(game) {
    super(game, "Crown of Flames", "Tempest", "TMP");
  }
}

module.exports = CrownofFlames;
