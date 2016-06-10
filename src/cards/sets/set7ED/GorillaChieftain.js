"use strict";
const Constants = require ("../../../Constants");
const GorillaChieftainBase = require("../setALL/GorillaChieftain");

class GorillaChieftain extends GorillaChieftainBase {
  constructor (game) {
    super(game, "Gorilla Chieftain", "Seventh Edition", "7ED");
  }
}

module.exports = GorillaChieftain;
