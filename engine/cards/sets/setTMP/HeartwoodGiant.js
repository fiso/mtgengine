"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartwood Giant", "Tempest", "TMP");
  }
}

module.exports = HeartwoodGiant;
