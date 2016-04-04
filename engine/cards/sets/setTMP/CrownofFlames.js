"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrownofFlamesBase = require("../setINV/CrownofFlames.js");

class CrownofFlames extends CrownofFlamesBase {
  constructor(game) {
    super(game, "Crown of Flames", "Tempest", "TMP");
  }
}

module.exports = CrownofFlames;
