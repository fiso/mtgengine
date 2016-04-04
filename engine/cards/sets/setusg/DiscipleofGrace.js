"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiscipleofGraceBase = require("../setONS/DiscipleofGrace.js");

class DiscipleofGrace extends DiscipleofGraceBase {
  constructor(game) {
    super(game, "Disciple of Grace", "Urza's Saga", "USG");
  }
}

module.exports = DiscipleofGrace;
