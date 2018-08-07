"use strict";
const Constants = require ("../../../Constants");
const AbzanBattlePriestBase = require("../setIMA/AbzanBattlePriest");

class AbzanBattlePriest extends AbzanBattlePriestBase {
  constructor (game) {
    super(game, "Abzan Battle Priest", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanBattlePriest;
