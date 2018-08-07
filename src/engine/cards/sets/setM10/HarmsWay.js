"use strict";
const Constants = require ("../../../Constants");
const HarmsWayBase = require("../setDDG/HarmsWay");

class HarmsWay extends HarmsWayBase {
  constructor (game) {
    super(game, "Harm's Way", "Magic 2010", "M10");
  }
}

module.exports = HarmsWay;
