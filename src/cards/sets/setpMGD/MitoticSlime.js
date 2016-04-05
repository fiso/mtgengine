"use strict";
const Constants = require ("../../../Constants");
const MitoticSlimeBase = require("../setM11/MitoticSlime");

class MitoticSlime extends MitoticSlimeBase {
  constructor(game) {
    super(game, "Mitotic Slime", "Magic Game Day", "pMGD");
  }
}

module.exports = MitoticSlime;
