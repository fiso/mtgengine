"use strict";
const Constants = require ("../../../Constants");
const KudzuBase = require("../setCED/Kudzu");

class Kudzu extends KudzuBase {
  constructor(game) {
    super(game, "Kudzu", "Revised Edition", "3ED");
  }
}

module.exports = Kudzu;
