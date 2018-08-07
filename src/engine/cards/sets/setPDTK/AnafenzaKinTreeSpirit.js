"use strict";
const Constants = require ("../../../Constants");
const AnafenzaKinTreeSpiritBase = require("../setDTK/AnafenzaKinTreeSpirit");

class AnafenzaKinTreeSpirit extends AnafenzaKinTreeSpiritBase {
  constructor (game) {
    super(game, "Anafenza, Kin-Tree Spirit", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = AnafenzaKinTreeSpirit;
