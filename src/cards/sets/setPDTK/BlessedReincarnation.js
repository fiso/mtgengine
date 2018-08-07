"use strict";
const Constants = require ("../../../Constants");
const BlessedReincarnationBase = require("../setDTK/BlessedReincarnation");

class BlessedReincarnation extends BlessedReincarnationBase {
  constructor (game) {
    super(game, "Blessed Reincarnation", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = BlessedReincarnation;
