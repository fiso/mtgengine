"use strict";
const Constants = require ("../../../Constants");
const TromptheDomainsBase = require("../setMMA/TromptheDomains");

class TromptheDomains extends TromptheDomainsBase {
  constructor (game) {
    super(game, "Tromp the Domains", "Time Spiral", "TSP");
  }
}

module.exports = TromptheDomains;
