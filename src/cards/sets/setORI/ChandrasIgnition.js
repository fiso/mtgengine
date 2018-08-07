"use strict";
const Constants = require ("../../../Constants");
const ChandrasIgnitionBase = require("../setPORI/ChandrasIgnition");

class ChandrasIgnition extends ChandrasIgnitionBase {
  constructor (game) {
    super(game, "Chandra's Ignition", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasIgnition;
