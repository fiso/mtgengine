"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoortoNothingness extends Card {
  constructor(game) {
    super(game, "Door to Nothingness", "Fifth Dawn", "5DN");
  }
}

module.exports = DoortoNothingness;
