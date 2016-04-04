"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauntlessDourbarkBase = require("../setpGTW/DauntlessDourbark.js");

class DauntlessDourbark extends DauntlessDourbarkBase {
  constructor(game) {
    super(game, "Dauntless Dourbark", "Lorwyn", "LRW");
  }
}

module.exports = DauntlessDourbark;
