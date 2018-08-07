"use strict";
const Constants = require ("../../../Constants");
const VinesoftheRecluseBase = require("../setE01/VinesoftheRecluse");

class VinesoftheRecluse extends VinesoftheRecluseBase {
  constructor (game) {
    super(game, "Vines of the Recluse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VinesoftheRecluse;
