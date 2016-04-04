"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeerPressure extends Card {
  constructor(game) {
    super(game, "Peer Pressure", "Onslaught", "ONS");
  }
}

module.exports = PeerPressure;
