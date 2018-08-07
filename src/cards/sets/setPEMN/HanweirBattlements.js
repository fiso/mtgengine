"use strict";
const Constants = require ("../../../Constants");
const HanweirBattlementsBase = require("../setEMN/HanweirBattlements");

class HanweirBattlements extends HanweirBattlementsBase {
  constructor (game) {
    super(game, "Hanweir Battlements", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = HanweirBattlements;
