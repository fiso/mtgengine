"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarBehemothBase = require("../set8ED/LlanowarBehemoth.js");

class LlanowarBehemoth extends LlanowarBehemothBase {
  constructor(game) {
    super(game, "Llanowar Behemoth", "Weatherlight", "WTH");
  }
}

module.exports = LlanowarBehemoth;
