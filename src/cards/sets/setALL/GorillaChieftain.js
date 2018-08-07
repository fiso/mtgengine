"use strict";
const Constants = require ("../../../Constants");
const GorillaChieftainBase = require("../set7ED/GorillaChieftain");

class GorillaChieftain extends GorillaChieftainBase {
  constructor (game) {
    super(game, "Gorilla Chieftain", "Alliances", "ALL");
  }
}

module.exports = GorillaChieftain;
