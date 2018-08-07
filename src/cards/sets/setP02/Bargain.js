"use strict";
const Constants = require ("../../../Constants");
const BargainBase = require("../setS99/Bargain");

class Bargain extends BargainBase {
  constructor (game) {
    super(game, "Bargain", "Portal Second Age", "P02");
  }
}

module.exports = Bargain;
