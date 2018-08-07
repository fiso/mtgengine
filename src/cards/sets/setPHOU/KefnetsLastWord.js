"use strict";
const Constants = require ("../../../Constants");
const KefnetsLastWordBase = require("../setHOU/KefnetsLastWord");

class KefnetsLastWord extends KefnetsLastWordBase {
  constructor (game) {
    super(game, "Kefnet's Last Word", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = KefnetsLastWord;
