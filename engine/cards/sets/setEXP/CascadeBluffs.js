"use strict";
const Constants = require ("../../../Constants");
const CascadeBluffsBase = require("../setEVE/CascadeBluffs");

class CascadeBluffs extends CascadeBluffsBase {
  constructor(game) {
    super(game, "Cascade Bluffs", "Zendikar Expedition", "EXP");
  }
}

module.exports = CascadeBluffs;
