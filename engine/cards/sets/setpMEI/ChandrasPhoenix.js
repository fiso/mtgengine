"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandrasPhoenixBase = require("../setM12/ChandrasPhoenix.js");

class ChandrasPhoenix extends ChandrasPhoenixBase {
  constructor(game) {
    super(game, "Chandra's Phoenix", "Media Inserts", "pMEI");
  }
}

module.exports = ChandrasPhoenix;
