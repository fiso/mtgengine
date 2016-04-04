"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeckonApparitionBase = require("../setEVE/BeckonApparition.js");

class BeckonApparition extends BeckonApparitionBase {
  constructor(game) {
    super(game, "Beckon Apparition", "Gatecrash", "GTC");
  }
}

module.exports = BeckonApparition;
