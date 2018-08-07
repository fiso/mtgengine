"use strict";
const Constants = require ("../../../Constants");
const CuratorofMysteriesBase = require("../setAKH/CuratorofMysteries");

class CuratorofMysteries extends CuratorofMysteriesBase {
  constructor (game) {
    super(game, "Curator of Mysteries", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CuratorofMysteries;
