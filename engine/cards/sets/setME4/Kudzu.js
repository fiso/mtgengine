"use strict";
const Constants = require ("../../../Constants");
const KudzuBase = require("../setCED/Kudzu");

class Kudzu extends KudzuBase {
  constructor(game) {
    super(game, "Kudzu", "Masters Edition IV", "ME4");
  }
}

module.exports = Kudzu;
