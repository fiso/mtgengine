"use strict";
const Constants = require ("../../../Constants");
const ClayStatueBase = require("../setATQ/ClayStatue");

class ClayStatue extends ClayStatueBase {
  constructor (game) {
    super(game, "Clay Statue", "Masters Edition IV", "ME4");
  }
}

module.exports = ClayStatue;
