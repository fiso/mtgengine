"use strict";
const Constants = require ("../../../Constants");
const ChandrasPhoenixBase = require("../setE01/ChandrasPhoenix");

class ChandrasPhoenix extends ChandrasPhoenixBase {
  constructor (game) {
    super(game, "Chandra's Phoenix", "Magic Online Promos", "PRM");
  }
}

module.exports = ChandrasPhoenix;
