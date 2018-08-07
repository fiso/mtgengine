"use strict";
const Constants = require ("../../../Constants");
const StormbindBase = require("../setTSB/Stormbind");

class Stormbind extends StormbindBase {
  constructor (game) {
    super(game, "Stormbind", "Ice Age", "ICE");
  }
}

module.exports = Stormbind;
