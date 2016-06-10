"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowstone Giant", "Tempest", "TMP");
  }
}

module.exports = FlowstoneGiant;
