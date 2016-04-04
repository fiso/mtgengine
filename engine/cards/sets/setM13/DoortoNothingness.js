"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoortoNothingnessBase = require("../set5DN/DoortoNothingness.js");

class DoortoNothingness extends DoortoNothingnessBase {
  constructor(game) {
    super(game, "Door to Nothingness", "Magic 2013", "M13");
  }
}

module.exports = DoortoNothingness;
