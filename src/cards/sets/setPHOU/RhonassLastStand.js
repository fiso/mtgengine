"use strict";
const Constants = require ("../../../Constants");
const RhonassLastStandBase = require("../setHOU/RhonassLastStand");

class RhonassLastStand extends RhonassLastStandBase {
  constructor (game) {
    super(game, "Rhonas's Last Stand", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = RhonassLastStand;
