"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrostheAvengerBase = require("../setCMD/OrostheAvenger.js");

class OrostheAvenger extends OrostheAvengerBase {
  constructor(game) {
    super(game, "Oros, the Avenger", "Planar Chaos", "PLC");
  }
}

module.exports = OrostheAvenger;
