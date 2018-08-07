"use strict";
const Constants = require ("../../../Constants");
const WordofCommandBase = require("../setME4/WordofCommand");

class WordofCommand extends WordofCommandBase {
  constructor (game) {
    super(game, "Word of Command", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WordofCommand;
