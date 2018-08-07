"use strict";
const Constants = require ("../../../Constants");
const SustaineroftheRealmBase = require("../setIMA/SustaineroftheRealm");

class SustaineroftheRealm extends SustaineroftheRealmBase {
  constructor (game) {
    super(game, "Sustainer of the Realm", "Urza's Legacy", "ULG");
  }
}

module.exports = SustaineroftheRealm;
