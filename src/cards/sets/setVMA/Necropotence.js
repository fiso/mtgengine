"use strict";
const Constants = require ("../../../Constants");
const NecropotenceBase = require("../setDKM/Necropotence");

class Necropotence extends NecropotenceBase {
  constructor (game) {
    super(game, "Necropotence", "Vintage Masters", "VMA");
  }
}

module.exports = Necropotence;
