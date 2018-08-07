"use strict";
const Constants = require ("../../../Constants");
const KjeldoranDeadBase = require("../setME2/KjeldoranDead");

class KjeldoranDead extends KjeldoranDeadBase {
  constructor (game) {
    super(game, "Kjeldoran Dead", "Fifth Edition", "5ED");
  }
}

module.exports = KjeldoranDead;
