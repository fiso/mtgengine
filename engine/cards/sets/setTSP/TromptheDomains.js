"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TromptheDomainsBase = require("../setMMA/TromptheDomains.js");

class TromptheDomains extends TromptheDomainsBase {
  constructor(game) {
    super(game, "Tromp the Domains", "Time Spiral", "TSP");
  }
}

module.exports = TromptheDomains;
