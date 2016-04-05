"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeapofFaith extends UnimplementedCard {
  constructor(game) {
    super(game, "Leap of Faith", "Avacyn Restored", "AVR");
  }
}

module.exports = LeapofFaith;
