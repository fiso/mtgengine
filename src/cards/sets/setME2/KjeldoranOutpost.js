"use strict";
const Constants = require ("../../../Constants");
const KjeldoranOutpostBase = require("../setVMA/KjeldoranOutpost");

class KjeldoranOutpost extends KjeldoranOutpostBase {
  constructor (game) {
    super(game, "Kjeldoran Outpost", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranOutpost;
