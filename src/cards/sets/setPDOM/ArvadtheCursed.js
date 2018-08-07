"use strict";
const Constants = require ("../../../Constants");
const ArvadtheCursedBase = require("../setDOM/ArvadtheCursed");

class ArvadtheCursed extends ArvadtheCursedBase {
  constructor (game) {
    super(game, "Arvad the Cursed", "Dominaria Promos", "PDOM");
  }
}

module.exports = ArvadtheCursed;
