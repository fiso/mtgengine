"use strict";
const Constants = require ("../../../Constants");
const GusthasScepterBase = require("../setME2/GusthasScepter");

class GusthasScepter extends GusthasScepterBase {
  constructor (game) {
    super(game, "Gustha's Scepter", "Alliances", "ALL");
  }
}

module.exports = GusthasScepter;
