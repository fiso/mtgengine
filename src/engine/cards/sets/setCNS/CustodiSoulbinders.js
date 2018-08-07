"use strict";
const Constants = require ("../../../Constants");
const CustodiSoulbindersBase = require("../setCM2/CustodiSoulbinders");

class CustodiSoulbinders extends CustodiSoulbindersBase {
  constructor (game) {
    super(game, "Custodi Soulbinders", "Conspiracy", "CNS");
  }
}

module.exports = CustodiSoulbinders;
