"use strict";
const Constants = require ("../../../Constants");
const PresenceoftheMasterBase = require("../setUSG/PresenceoftheMaster");

class PresenceoftheMaster extends PresenceoftheMasterBase {
  constructor (game) {
    super(game, "Presence of the Master", "Legends", "LEG");
  }
}

module.exports = PresenceoftheMaster;
