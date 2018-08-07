"use strict";
const Constants = require ("../../../Constants");
const NecropotenceBase = require("../setIMA/Necropotence");

class Necropotence extends NecropotenceBase {
  constructor (game) {
    super(game, "Necropotence", "Ice Age", "ICE");
  }
}

module.exports = Necropotence;
