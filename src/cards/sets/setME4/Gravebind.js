"use strict";
const Constants = require ("../../../Constants");
const GravebindBase = require("../setICE/Gravebind");

class Gravebind extends GravebindBase {
  constructor (game) {
    super(game, "Gravebind", "Masters Edition IV", "ME4");
  }
}

module.exports = Gravebind;
