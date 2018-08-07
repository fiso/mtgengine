"use strict";
const Constants = require ("../../../Constants");
const SlayBase = require("../setDDE/Slay");

class Slay extends SlayBase {
  constructor (game) {
    super(game, "Slay", "Ninth Edition", "9ED");
  }
}

module.exports = Slay;
