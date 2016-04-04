"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NarrowEscapeBase = require("../setDDE/NarrowEscape.js");

class NarrowEscape extends NarrowEscapeBase {
  constructor(game) {
    super(game, "Narrow Escape", "Zendikar", "ZEN");
  }
}

module.exports = NarrowEscape;
