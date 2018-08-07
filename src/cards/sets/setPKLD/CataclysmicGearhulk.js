"use strict";
const Constants = require ("../../../Constants");
const CataclysmicGearhulkBase = require("../setKLD/CataclysmicGearhulk");

class CataclysmicGearhulk extends CataclysmicGearhulkBase {
  constructor (game) {
    super(game, "Cataclysmic Gearhulk", "Kaladesh Promos", "PKLD");
  }
}

module.exports = CataclysmicGearhulk;
