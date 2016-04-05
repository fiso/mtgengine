"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor(game) {
    super(game, "Isochron Scepter", "Friday Night Magic", "pFNM");
  }
}

module.exports = IsochronScepter;
