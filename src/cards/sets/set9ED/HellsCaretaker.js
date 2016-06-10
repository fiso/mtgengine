"use strict";
const Constants = require ("../../../Constants");
const HellsCaretakerBase = require("../setCHR/HellsCaretaker");

class HellsCaretaker extends HellsCaretakerBase {
  constructor (game) {
    super(game, "Hell's Caretaker", "Ninth Edition", "9ED");
  }
}

module.exports = HellsCaretaker;
