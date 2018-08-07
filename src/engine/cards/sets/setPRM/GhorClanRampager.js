"use strict";
const Constants = require ("../../../Constants");
const GhorClanRampagerBase = require("../setMM3/GhorClanRampager");

class GhorClanRampager extends GhorClanRampagerBase {
  constructor (game) {
    super(game, "Ghor-Clan Rampager", "Magic Online Promos", "PRM");
  }
}

module.exports = GhorClanRampager;
