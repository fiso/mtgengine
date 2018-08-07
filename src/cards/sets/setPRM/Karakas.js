"use strict";
const Constants = require ("../../../Constants");
const KarakasBase = require("../setEMA/Karakas");

class Karakas extends KarakasBase {
  constructor (game) {
    super(game, "Karakas", "Magic Online Promos", "PRM");
  }
}

module.exports = Karakas;
