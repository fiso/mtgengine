"use strict";
const Constants = require ("../../../Constants");
const ZhalfirinCrusaderBase = require("../setVMA/ZhalfirinCrusader");

class ZhalfirinCrusader extends ZhalfirinCrusaderBase {
  constructor(game) {
    super(game, "Zhalfirin Crusader", "Visions", "VIS");
  }
}

module.exports = ZhalfirinCrusader;
