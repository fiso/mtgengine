"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter.js");

class IsochronScepter extends IsochronScepterBase {
  constructor(game) {
    super(game, "Isochron Scepter", "Mirrodin", "MRD");
  }
}

module.exports = IsochronScepter;
