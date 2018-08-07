"use strict";
const Constants = require ("../../../Constants");
const IcyBlastBase = require("../setKTK/IcyBlast");

class IcyBlast extends IcyBlastBase {
  constructor (game) {
    super(game, "Icy Blast", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = IcyBlast;
