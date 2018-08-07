"use strict";
const Constants = require ("../../../Constants");
const ZacamaPrimalCalamityBase = require("../setPRIX/ZacamaPrimalCalamity");

class ZacamaPrimalCalamity extends ZacamaPrimalCalamityBase {
  constructor (game) {
    super(game, "Zacama, Primal Calamity", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ZacamaPrimalCalamity;
