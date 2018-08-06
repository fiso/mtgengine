"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor (game) {
    super(game, "Isochron Scepter", "Eternal Masters", "EMA");
  }
}

module.exports = IsochronScepter;
