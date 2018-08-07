"use strict";
const Constants = require ("../../../Constants");
const DaggerbackBasiliskBase = require("../setM19/DaggerbackBasilisk");

class DaggerbackBasilisk extends DaggerbackBasiliskBase {
  constructor (game) {
    super(game, "Daggerback Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = DaggerbackBasilisk;
