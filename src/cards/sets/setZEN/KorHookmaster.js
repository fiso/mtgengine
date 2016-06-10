"use strict";
const Constants = require ("../../../Constants");
const KorHookmasterBase = require("../setDDF/KorHookmaster");

class KorHookmaster extends KorHookmasterBase {
  constructor (game) {
    super(game, "Kor Hookmaster", "Zendikar", "ZEN");
  }
}

module.exports = KorHookmaster;
