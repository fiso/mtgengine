"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TestamentofFaith extends Card {
  constructor(game) {
    super(game, "Testament of Faith", "Odyssey", "ODY");
  }
}

module.exports = TestamentofFaith;
