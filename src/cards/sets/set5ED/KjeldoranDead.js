"use strict";
const Constants = require ("../../../Constants");
const KjeldoranDeadBase = require("../set6ED/KjeldoranDead");

class KjeldoranDead extends KjeldoranDeadBase {
  constructor (game) {
    super(game, "Kjeldoran Dead", "Fifth Edition", "5ED");
  }
}

module.exports = KjeldoranDead;
