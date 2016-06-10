"use strict";
const Constants = require ("../../../Constants");
const MysticoftheHiddenWayBase = require("../setKTK/MysticoftheHiddenWay");

class MysticoftheHiddenWay extends MysticoftheHiddenWayBase {
  constructor (game) {
    super(game, "Mystic of the Hidden Way", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = MysticoftheHiddenWay;
