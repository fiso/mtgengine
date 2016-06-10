"use strict";
const Constants = require ("../../../Constants");
const EbonStrongholdBase = require("../setBTD/EbonStronghold");

class EbonStronghold extends EbonStrongholdBase {
  constructor (game) {
    super(game, "Ebon Stronghold", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = EbonStronghold;
