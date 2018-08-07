"use strict";
const Constants = require ("../../../Constants");
const FamineBase = require("../setVMA/Famine");

class Famine extends FamineBase {
  constructor (game) {
    super(game, "Famine", "Masters Edition III", "ME3");
  }
}

module.exports = Famine;
