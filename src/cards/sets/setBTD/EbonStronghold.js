"use strict";
const Constants = require ("../../../Constants");
const EbonStrongholdBase = require("../setPD3/EbonStronghold");

class EbonStronghold extends EbonStrongholdBase {
  constructor (game) {
    super(game, "Ebon Stronghold", "Beatdown Box Set", "BTD");
  }
}

module.exports = EbonStronghold;
