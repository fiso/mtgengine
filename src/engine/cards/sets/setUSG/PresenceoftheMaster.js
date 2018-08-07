"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresenceoftheMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Presence of the Master", "Urza's Saga", "USG");
  }
}

module.exports = PresenceoftheMaster;
