"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CascadeBluffsBase = require("../setEVE/CascadeBluffs.js");

class CascadeBluffs extends CascadeBluffsBase {
  constructor(game) {
    super(game, "Cascade Bluffs", "Zendikar Expedition", "EXP");
  }
}

module.exports = CascadeBluffs;
