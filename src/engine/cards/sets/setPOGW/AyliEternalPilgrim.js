"use strict";
const Constants = require ("../../../Constants");
const AyliEternalPilgrimBase = require("../setOGW/AyliEternalPilgrim");

class AyliEternalPilgrim extends AyliEternalPilgrimBase {
  constructor (game) {
    super(game, "Ayli, Eternal Pilgrim", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = AyliEternalPilgrim;
