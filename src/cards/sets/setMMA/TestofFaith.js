"use strict";
const Constants = require ("../../../Constants");
const TestofFaithBase = require("../setDST/TestofFaith");

class TestofFaith extends TestofFaithBase {
  constructor (game) {
    super(game, "Test of Faith", "Modern Masters", "MMA");
  }
}

module.exports = TestofFaith;
