"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraveTitanBase = require("../setC14/GraveTitan.js");

class GraveTitan extends GraveTitanBase {
  constructor(game) {
    super(game, "Grave Titan", "Media Inserts", "pMEI");
  }
}

module.exports = GraveTitan;
