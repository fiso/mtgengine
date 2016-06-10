"use strict";
const Constants = require ("../../../Constants");
const EbonStrongholdBase = require("../setBTD/EbonStronghold");

class EbonStronghold extends EbonStrongholdBase {
  constructor (game) {
    super(game, "Ebon Stronghold", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EbonStronghold;
