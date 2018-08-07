"use strict";
const Constants = require ("../../../Constants");
const DarksteelAxeBase = require("../setIMA/DarksteelAxe");

class DarksteelAxe extends DarksteelAxeBase {
  constructor (game) {
    super(game, "Darksteel Axe", "Modern Masters 2015", "MM2");
  }
}

module.exports = DarksteelAxe;
