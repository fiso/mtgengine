"use strict";
const Constants = require ("../../../Constants");
const GravebindBase = require("../setME4/Gravebind");

class Gravebind extends GravebindBase {
  constructor (game) {
    super(game, "Gravebind", "Ice Age", "ICE");
  }
}

module.exports = Gravebind;
