"use strict";
const Constants = require ("../../../Constants");
const VampirismBase = require("../setMGB/Vampirism");

class Vampirism extends VampirismBase {
  constructor(game) {
    super(game, "Vampirism", "Visions", "VIS");
  }
}

module.exports = Vampirism;
