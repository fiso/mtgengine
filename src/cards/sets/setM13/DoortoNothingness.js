"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoortoNothingness extends UnimplementedCard {
  constructor (game) {
    super(game, "Door to Nothingness", "Magic 2013", "M13");
  }
}

module.exports = DoortoNothingness;
