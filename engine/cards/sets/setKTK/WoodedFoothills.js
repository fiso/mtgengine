"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodedFoothillsBase = require("../setpJGP/WoodedFoothills.js");

class WoodedFoothills extends WoodedFoothillsBase {
  constructor(game) {
    super(game, "Wooded Foothills", "Khans of Tarkir", "KTK");
  }
}

module.exports = WoodedFoothills;
