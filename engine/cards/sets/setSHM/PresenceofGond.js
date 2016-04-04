"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PresenceofGondBase = require("../setC13/PresenceofGond.js");

class PresenceofGond extends PresenceofGondBase {
  constructor(game) {
    super(game, "Presence of Gond", "Shadowmoor", "SHM");
  }
}

module.exports = PresenceofGond;
