"use strict";
const Constants = require ("../../../Constants");
const OketrasLastMercyBase = require("../setHOU/OketrasLastMercy");

class OketrasLastMercy extends OketrasLastMercyBase {
  constructor (game) {
    super(game, "Oketra's Last Mercy", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = OketrasLastMercy;
