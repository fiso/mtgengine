"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunkenRuinsBase = require("../setSHM/SunkenRuins.js");

class SunkenRuins extends SunkenRuinsBase {
  constructor(game) {
    super(game, "Sunken Ruins", "Zendikar Expedition", "EXP");
  }
}

module.exports = SunkenRuins;
