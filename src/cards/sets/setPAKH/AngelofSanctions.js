"use strict";
const Constants = require ("../../../Constants");
const AngelofSanctionsBase = require("../setAKH/AngelofSanctions");

class AngelofSanctions extends AngelofSanctionsBase {
  constructor (game) {
    super(game, "Angel of Sanctions", "Amonkhet Promos", "PAKH");
  }
}

module.exports = AngelofSanctions;
