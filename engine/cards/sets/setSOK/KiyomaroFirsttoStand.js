"use strict";
const Constants = require ("../../../Constants");
const KiyomaroFirsttoStandBase = require("../setpPRE/KiyomaroFirsttoStand");

class KiyomaroFirsttoStand extends KiyomaroFirsttoStandBase {
  constructor(game) {
    super(game, "Kiyomaro, First to Stand", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KiyomaroFirsttoStand;
