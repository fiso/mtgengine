"use strict";
const Constants = require ("../../../Constants");
const ZhalfirinVoidBase = require("../setDOM/ZhalfirinVoid");

class ZhalfirinVoid extends ZhalfirinVoidBase {
  constructor (game) {
    super(game, "Zhalfirin Void", "Magic Online Promos", "PRM");
  }
}

module.exports = ZhalfirinVoid;
