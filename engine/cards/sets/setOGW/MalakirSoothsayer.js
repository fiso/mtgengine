"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalakirSoothsayer extends Card {
  constructor(game) {
    super(game, "Malakir Soothsayer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MalakirSoothsayer;
