"use strict";
const Constants = require ("../../../Constants");
const WordofCommandBase = require("../setCED/WordofCommand");

class WordofCommand extends WordofCommandBase {
  constructor(game) {
    super(game, "Word of Command", "International Collector's Edition", "CEI");
  }
}

module.exports = WordofCommand;
