"use strict";
const Constants = require ("../../../Constants");
const BeckonApparitionBase = require("../setEVE/BeckonApparition");

class BeckonApparition extends BeckonApparitionBase {
  constructor(game) {
    super(game, "Beckon Apparition", "Gatecrash", "GTC");
  }
}

module.exports = BeckonApparition;
