"use strict";
const Constants = require ("../../../Constants");
const WordofCommandBase = require("../setME4/WordofCommand");

class WordofCommand extends WordofCommandBase {
  constructor (game) {
    super(game, "Word of Command", "Collectors’ Edition", "CED");
  }
}

module.exports = WordofCommand;
