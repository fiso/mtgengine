"use strict";
const Constants = require ("../../../Constants");
const NarrowEscapeBase = require("../setDDE/NarrowEscape");

class NarrowEscape extends NarrowEscapeBase {
  constructor (game) {
    super(game, "Narrow Escape", "Zendikar", "ZEN");
  }
}

module.exports = NarrowEscape;
