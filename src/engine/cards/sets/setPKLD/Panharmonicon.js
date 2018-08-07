"use strict";
const Constants = require ("../../../Constants");
const PanharmoniconBase = require("../setKLD/Panharmonicon");

class Panharmonicon extends PanharmoniconBase {
  constructor (game) {
    super(game, "Panharmonicon", "Kaladesh Promos", "PKLD");
  }
}

module.exports = Panharmonicon;
