"use strict";
const Constants = require ("../../../Constants");
const HellsCaretakerBase = require("../setA25/HellsCaretaker");

class HellsCaretaker extends HellsCaretakerBase {
  constructor (game) {
    super(game, "Hell's Caretaker", "Chronicles", "CHR");
  }
}

module.exports = HellsCaretaker;
