"use strict";
const Constants = require ("../../../Constants");
const EbonStrongholdBase = require("../setBTD/EbonStronghold");

class EbonStronghold extends EbonStrongholdBase {
  constructor (game) {
    super(game, "Ebon Stronghold", "Fifth Edition", "5ED");
  }
}

module.exports = EbonStronghold;
