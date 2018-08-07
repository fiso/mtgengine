"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setEMA/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor (game) {
    super(game, "Isochron Scepter", "Magic Online Promos", "PRM");
  }
}

module.exports = IsochronScepter;
