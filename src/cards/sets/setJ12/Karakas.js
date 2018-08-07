"use strict";
const Constants = require ("../../../Constants");
const KarakasBase = require("../setEMA/Karakas");

class Karakas extends KarakasBase {
  constructor (game) {
    super(game, "Karakas", "Judge Gift Cards 2012", "J12");
  }
}

module.exports = Karakas;
