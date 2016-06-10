"use strict";
const Constants = require ("../../../Constants");
const GhorClanRampagerBase = require("../setpFNM/GhorClanRampager");

class GhorClanRampager extends GhorClanRampagerBase {
  constructor (game) {
    super(game, "Ghor-Clan Rampager", "Gatecrash", "GTC");
  }
}

module.exports = GhorClanRampager;
