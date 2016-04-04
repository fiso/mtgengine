"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KessigWolfRunBase = require("../setV13/KessigWolfRun.js");

class KessigWolfRun extends KessigWolfRunBase {
  constructor(game) {
    super(game, "Kessig Wolf Run", "Innistrad", "ISD");
  }
}

module.exports = KessigWolfRun;
