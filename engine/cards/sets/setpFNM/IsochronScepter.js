"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter.js");

class IsochronScepter extends IsochronScepterBase {
  constructor(game) {
    super(game, "Isochron Scepter", "Friday Night Magic", "pFNM");
  }
}

module.exports = IsochronScepter;
