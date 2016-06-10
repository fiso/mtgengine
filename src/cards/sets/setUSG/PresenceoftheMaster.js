"use strict";
const Constants = require ("../../../Constants");
const PresenceoftheMasterBase = require("../setLEG/PresenceoftheMaster");

class PresenceoftheMaster extends PresenceoftheMasterBase {
  constructor (game) {
    super(game, "Presence of the Master", "Urza's Saga", "USG");
  }
}

module.exports = PresenceoftheMaster;
