"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandtoHand extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand to Hand", "Tempest", "TMP");
  }
}

module.exports = HandtoHand;
