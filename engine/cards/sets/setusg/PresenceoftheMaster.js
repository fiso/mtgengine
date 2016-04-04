"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PresenceoftheMasterBase = require("../setLEG/PresenceoftheMaster.js");

class PresenceoftheMaster extends PresenceoftheMasterBase {
  constructor(game) {
    super(game, "Presence of the Master", "Urza's Saga", "USG");
  }
}

module.exports = PresenceoftheMaster;
