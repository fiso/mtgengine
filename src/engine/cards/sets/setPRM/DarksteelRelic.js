"use strict";
const Constants = require ("../../../Constants");
const DarksteelRelicBase = require("../setNPH/DarksteelRelic");

class DarksteelRelic extends DarksteelRelicBase {
  constructor (game) {
    super(game, "Darksteel Relic", "Magic Online Promos", "PRM");
  }
}

module.exports = DarksteelRelic;
