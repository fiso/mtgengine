"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreamofAcid extends UnimplementedCard {
  constructor (game) {
    super(game, "Stream of Acid", "You Make the Cube", "PZ2");
  }
}

module.exports = StreamofAcid;
