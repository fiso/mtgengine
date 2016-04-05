"use strict";
const Constants = require ("../../../Constants");
const KorHavenBase = require("../setNMS/KorHaven");

class KorHaven extends KorHavenBase {
  constructor(game) {
    super(game, "Kor Haven", "Zendikar Expedition", "EXP");
  }
}

module.exports = KorHaven;
