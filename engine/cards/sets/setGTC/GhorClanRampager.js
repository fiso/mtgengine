"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhorClanRampagerBase = require("../setpFNM/GhorClanRampager.js");

class GhorClanRampager extends GhorClanRampagerBase {
  constructor(game) {
    super(game, "Ghor-Clan Rampager", "Gatecrash", "GTC");
  }
}

module.exports = GhorClanRampager;
