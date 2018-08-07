"use strict";
const Constants = require ("../../../Constants");
const SlayBase = require("../setDDE/Slay");

class Slay extends SlayBase {
  constructor (game) {
    super(game, "Slay", "Eighth Edition", "8ED");
  }
}

module.exports = Slay;
