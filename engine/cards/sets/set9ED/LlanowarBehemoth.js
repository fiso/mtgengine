"use strict";
const Constants = require ("../../../Constants");
const LlanowarBehemothBase = require("../set8ED/LlanowarBehemoth");

class LlanowarBehemoth extends LlanowarBehemothBase {
  constructor(game) {
    super(game, "Llanowar Behemoth", "Ninth Edition", "9ED");
  }
}

module.exports = LlanowarBehemoth;
