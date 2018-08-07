"use strict";
const Constants = require ("../../../Constants");
const MindcrankBase = require("../setIMA/Mindcrank");

class Mindcrank extends MindcrankBase {
  constructor (game) {
    super(game, "Mindcrank", "New Phyrexia", "NPH");
  }
}

module.exports = Mindcrank;
