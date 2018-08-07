"use strict";
const Constants = require ("../../../Constants");
const VoidslimeBase = require("../setDIS/Voidslime");

class Voidslime extends VoidslimeBase {
  constructor (game) {
    super(game, "Voidslime", "Champs and States", "PCMP");
  }
}

module.exports = Voidslime;
