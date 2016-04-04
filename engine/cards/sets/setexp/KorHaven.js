"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorHavenBase = require("../setNMS/KorHaven.js");

class KorHaven extends KorHavenBase {
  constructor(game) {
    super(game, "Kor Haven", "Zendikar Expedition", "EXP");
  }
}

module.exports = KorHaven;
