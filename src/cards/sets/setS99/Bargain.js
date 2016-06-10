"use strict";
const Constants = require ("../../../Constants");
const BargainBase = require("../setPO2/Bargain");

class Bargain extends BargainBase {
  constructor (game) {
    super(game, "Bargain", "Starter 1999", "S99");
  }
}

module.exports = Bargain;
