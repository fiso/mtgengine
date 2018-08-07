"use strict";
const Constants = require ("../../../Constants");
const LlanowarBehemothBase = require("../set9ED/LlanowarBehemoth");

class LlanowarBehemoth extends LlanowarBehemothBase {
  constructor (game) {
    super(game, "Llanowar Behemoth", "Eighth Edition", "8ED");
  }
}

module.exports = LlanowarBehemoth;
