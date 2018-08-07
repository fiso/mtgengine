"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallotBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ballot Broker", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BallotBroker;
