"use strict";
const Constants = require ("../../../Constants");
const GoblinChieftainBase = require("../setDDT/GoblinChieftain");

class GoblinChieftain extends GoblinChieftainBase {
  constructor (game) {
    super(game, "Goblin Chieftain", "Magic 2012", "M12");
  }
}

module.exports = GoblinChieftain;
