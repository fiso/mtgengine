"use strict";
const Constants = require ("../../../Constants");
const DiscipleofGraceBase = require("../setONS/DiscipleofGrace");

class DiscipleofGrace extends DiscipleofGraceBase {
  constructor(game) {
    super(game, "Disciple of Grace", "Urza's Saga", "USG");
  }
}

module.exports = DiscipleofGrace;
