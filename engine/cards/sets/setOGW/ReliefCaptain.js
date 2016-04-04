"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReliefCaptain extends Card {
  constructor(game) {
    super(game, "Relief Captain", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReliefCaptain;
