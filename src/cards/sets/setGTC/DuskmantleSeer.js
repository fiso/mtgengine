"use strict";
const Constants = require ("../../../Constants");
const DuskmantleSeerBase = require("../setC18/DuskmantleSeer");

class DuskmantleSeer extends DuskmantleSeerBase {
  constructor (game) {
    super(game, "Duskmantle Seer", "Gatecrash", "GTC");
  }
}

module.exports = DuskmantleSeer;
