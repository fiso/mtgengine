"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StaffoftheAges extends Card {
  constructor(game) {
    super(game, "Staff of the Ages", "Ice Age", "ICE");
  }
}

module.exports = StaffoftheAges;
