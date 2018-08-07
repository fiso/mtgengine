"use strict";
const Constants = require ("../../../Constants");
const GhorClanRampagerBase = require("../setMM3/GhorClanRampager");

class GhorClanRampager extends GhorClanRampagerBase {
  constructor (game) {
    super(game, "Ghor-Clan Rampager", "Friday Night Magic 2013", "F13");
  }
}

module.exports = GhorClanRampager;
