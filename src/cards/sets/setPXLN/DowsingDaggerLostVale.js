"use strict";
const Constants = require ("../../../Constants");
const DowsingDaggerLostValeBase = require("../setPXTC/DowsingDaggerLostVale");

class DowsingDaggerLostVale extends DowsingDaggerLostValeBase {
  constructor (game) {
    super(game, "Dowsing Dagger // Lost Vale", "Ixalan Promos", "PXLN");
  }
}

module.exports = DowsingDaggerLostVale;
