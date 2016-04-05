"use strict";
const Constants = require ("../../../Constants");
const CursedRackBase = require("../setATQ/CursedRack");

class CursedRack extends CursedRackBase {
  constructor(game) {
    super(game, "Cursed Rack", "Masters Edition", "MED");
  }
}

module.exports = CursedRack;
