"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeerPressure extends UnimplementedCard {
  constructor (game) {
    super(game, "Peer Pressure", "Onslaught", "ONS");
  }
}

module.exports = PeerPressure;
