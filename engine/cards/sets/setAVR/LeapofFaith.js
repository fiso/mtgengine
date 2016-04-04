"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeapofFaith extends Card {
  constructor(game) {
    super(game, "Leap of Faith", "Avacyn Restored", "AVR");
  }
}

module.exports = LeapofFaith;
