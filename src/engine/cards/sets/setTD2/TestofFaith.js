"use strict";
const Constants = require ("../../../Constants");
const TestofFaithBase = require("../setMMA/TestofFaith");

class TestofFaith extends TestofFaithBase {
  constructor (game) {
    super(game, "Test of Faith", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TestofFaith;
