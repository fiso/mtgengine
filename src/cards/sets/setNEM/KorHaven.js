"use strict";
const Constants = require ("../../../Constants");
const KorHavenBase = require("../setEXP/KorHaven");

class KorHaven extends KorHavenBase {
  constructor (game) {
    super(game, "Kor Haven", "Nemesis", "NEM");
  }
}

module.exports = KorHaven;
