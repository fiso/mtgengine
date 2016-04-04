"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EbonStrongholdBase = require("../setBTD/EbonStronghold.js");

class EbonStronghold extends EbonStrongholdBase {
  constructor(game) {
    super(game, "Ebon Stronghold", "Fallen Empires", "FEM");
  }
}

module.exports = EbonStronghold;
