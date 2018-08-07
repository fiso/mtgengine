"use strict";
const Constants = require ("../../../Constants");
const MouthFeedBase = require("../setAKH/MouthFeed");

class MouthFeed extends MouthFeedBase {
  constructor (game) {
    super(game, "Mouth // Feed", "Amonkhet Promos", "PAKH");
  }
}

module.exports = MouthFeed;
