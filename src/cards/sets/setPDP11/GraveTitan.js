"use strict";
const Constants = require ("../../../Constants");
const GraveTitanBase = require("../setC14/GraveTitan");

class GraveTitan extends GraveTitanBase {
  constructor (game) {
    super(game, "Grave Titan", "Duels of the Planeswalkers Promos 2011", "PDP11");
  }
}

module.exports = GraveTitan;
