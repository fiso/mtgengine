"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TestofFaith extends Card {
  constructor(game) {
    super(game, "Test of Faith", "Darksteel", "DST");
  }
}

module.exports = TestofFaith;
