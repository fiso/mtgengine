"use strict";
const Constants = require ("../../../Constants");
const DustBowlBase = require("../setMMQ/DustBowl");

class DustBowl extends DustBowlBase {
  constructor(game) {
    super(game, "Dust Bowl", "Zendikar Expedition", "EXP");
  }
}

module.exports = DustBowl;
