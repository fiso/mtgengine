"use strict";
const Constants = require ("../../../Constants");
const PromiseofBunreiBase = require("../setA25/PromiseofBunrei");

class PromiseofBunrei extends PromiseofBunreiBase {
  constructor (game) {
    super(game, "Promise of Bunrei", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PromiseofBunrei;
