"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerfistGiantBase = require("../setC15/HammerfistGiant.js");

class HammerfistGiant extends HammerfistGiantBase {
  constructor(game) {
    super(game, "Hammerfist Giant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HammerfistGiant;
