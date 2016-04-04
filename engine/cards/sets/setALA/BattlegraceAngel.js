"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattlegraceAngelBase = require("../setMM2/BattlegraceAngel.js");

class BattlegraceAngel extends BattlegraceAngelBase {
  constructor(game) {
    super(game, "Battlegrace Angel", "Shards of Alara", "ALA");
  }
}

module.exports = BattlegraceAngel;
