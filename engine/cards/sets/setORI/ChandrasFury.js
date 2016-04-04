"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandrasFuryBase = require("../setM13/ChandrasFury.js");

class ChandrasFury extends ChandrasFuryBase {
  constructor(game) {
    super(game, "Chandra's Fury", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasFury;
