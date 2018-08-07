"use strict";
const Constants = require ("../../../Constants");
const KjeldoranDeadBase = require("../setME2/KjeldoranDead");

class KjeldoranDead extends KjeldoranDeadBase {
  constructor (game) {
    super(game, "Kjeldoran Dead", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KjeldoranDead;
