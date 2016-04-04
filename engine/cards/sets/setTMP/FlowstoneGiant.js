"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneGiant extends Card {
  constructor(game) {
    super(game, "Flowstone Giant", "Tempest", "TMP");
  }
}

module.exports = FlowstoneGiant;
