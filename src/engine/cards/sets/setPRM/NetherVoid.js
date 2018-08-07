"use strict";
const Constants = require ("../../../Constants");
const NetherVoidBase = require("../setME3/NetherVoid");

class NetherVoid extends NetherVoidBase {
  constructor (game) {
    super(game, "Nether Void", "Magic Online Promos", "PRM");
  }
}

module.exports = NetherVoid;
