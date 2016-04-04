"use strict";
const Constants = require ("../../../Constants");
const KessigWolfRunBase = require("../setV13/KessigWolfRun");

class KessigWolfRun extends KessigWolfRunBase {
  constructor(game) {
    super(game, "Kessig Wolf Run", "Innistrad", "ISD");
  }
}

module.exports = KessigWolfRun;
