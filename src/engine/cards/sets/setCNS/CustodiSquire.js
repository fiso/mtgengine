"use strict";
const Constants = require ("../../../Constants");
const CustodiSquireBase = require("../setPZ2/CustodiSquire");

class CustodiSquire extends CustodiSquireBase {
  constructor (game) {
    super(game, "Custodi Squire", "Conspiracy", "CNS");
  }
}

module.exports = CustodiSquire;
