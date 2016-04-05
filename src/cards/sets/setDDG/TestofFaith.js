"use strict";
const Constants = require ("../../../Constants");
const TestofFaithBase = require("../setDST/TestofFaith");

class TestofFaith extends TestofFaithBase {
  constructor(game) {
    super(game, "Test of Faith", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = TestofFaith;
