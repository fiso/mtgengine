"use strict";
const Constants = require ("../../../Constants");
const TsabosWebBase = require("../setWC01/TsabosWeb");

class TsabosWeb extends TsabosWebBase {
  constructor (game) {
    super(game, "Tsabo's Web", "Invasion", "INV");
  }
}

module.exports = TsabosWeb;
