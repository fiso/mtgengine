"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObeliskofAlaraBase = require("../setCON/ObeliskofAlara.js");

class ObeliskofAlara extends ObeliskofAlaraBase {
  constructor(game) {
    super(game, "Obelisk of Alara", "Launch Parties", "pLPA");
  }
}

module.exports = ObeliskofAlara;
