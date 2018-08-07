"use strict";
const Constants = require ("../../../Constants");
const VoidslimeBase = require("../setDIS/Voidslime");

class Voidslime extends VoidslimeBase {
  constructor (game) {
    super(game, "Voidslime", "Magic Online Promos", "PRM");
  }
}

module.exports = Voidslime;
