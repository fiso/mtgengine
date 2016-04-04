"use strict";
const Constants = require ("../../../Constants");
const BattlegraceAngelBase = require("../setMM2/BattlegraceAngel");

class BattlegraceAngel extends BattlegraceAngelBase {
  constructor(game) {
    super(game, "Battlegrace Angel", "Shards of Alara", "ALA");
  }
}

module.exports = BattlegraceAngel;
