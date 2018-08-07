"use strict";
const Constants = require ("../../../Constants");
const CursedRackBase = require("../setMED/CursedRack");

class CursedRack extends CursedRackBase {
  constructor (game) {
    super(game, "Cursed Rack", "Antiquities", "ATQ");
  }
}

module.exports = CursedRack;
