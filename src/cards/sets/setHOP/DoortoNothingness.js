"use strict";
const Constants = require ("../../../Constants");
const DoortoNothingnessBase = require("../setM13/DoortoNothingness");

class DoortoNothingness extends DoortoNothingnessBase {
  constructor (game) {
    super(game, "Door to Nothingness", "Planechase", "HOP");
  }
}

module.exports = DoortoNothingness;
