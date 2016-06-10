"use strict";
const Constants = require ("../../../Constants");
const GorillaChieftainBase = require("../setALL/GorillaChieftain");

class GorillaChieftain extends GorillaChieftainBase {
  constructor (game) {
    super(game, "Gorilla Chieftain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GorillaChieftain;
