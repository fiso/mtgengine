"use strict";
const Constants = require ("../../../Constants");
const JununEfreetBase = require("../setARN/JununEfreet");

class JununEfreet extends JununEfreetBase {
  constructor (game) {
    super(game, "Junún Efreet", "Masters Edition IV", "ME4");
  }
}

module.exports = JununEfreet;
