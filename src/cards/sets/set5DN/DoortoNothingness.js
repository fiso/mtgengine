"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoortoNothingness extends UnimplementedCard {
  constructor (game) {
    super(game, "Door to Nothingness", "Fifth Dawn", "5DN");
  }
}

module.exports = DoortoNothingness;
