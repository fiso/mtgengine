"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setEMA/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor (game) {
    super(game, "Isochron Scepter", "Friday Night Magic 2008", "F08");
  }
}

module.exports = IsochronScepter;
