"use strict";
const Constants = require ("../../../Constants");
const FamineBase = require("../setVMA/Famine");

class Famine extends FamineBase {
  constructor (game) {
    super(game, "Famine", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Famine;
