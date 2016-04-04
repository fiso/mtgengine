"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorHookmasterBase = require("../setDDF/KorHookmaster.js");

class KorHookmaster extends KorHookmasterBase {
  constructor(game) {
    super(game, "Kor Hookmaster", "Zendikar", "ZEN");
  }
}

module.exports = KorHookmaster;
