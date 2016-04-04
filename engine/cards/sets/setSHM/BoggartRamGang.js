"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoggartRamGangBase = require("../setpGTW/BoggartRamGang.js");

class BoggartRamGang extends BoggartRamGangBase {
  constructor(game) {
    super(game, "Boggart Ram-Gang", "Shadowmoor", "SHM");
  }
}

module.exports = BoggartRamGang;
