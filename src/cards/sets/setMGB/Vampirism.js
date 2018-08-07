"use strict";
const Constants = require ("../../../Constants");
const VampirismBase = require("../setVIS/Vampirism");

class Vampirism extends VampirismBase {
  constructor (game) {
    super(game, "Vampirism", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Vampirism;
