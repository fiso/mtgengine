"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticZealotBase = require("../setODY/MysticZealot.js");

class MysticZealot extends MysticZealotBase {
  constructor(game) {
    super(game, "Mystic Zealot", "Vintage Masters", "VMA");
  }
}

module.exports = MysticZealot;
