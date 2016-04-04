"use strict";
const Constants = require ("../../../Constants");
const GusthasScepterBase = require("../setALL/GusthasScepter");

class GusthasScepter extends GusthasScepterBase {
  constructor(game) {
    super(game, "Gustha's Scepter", "Masters Edition II", "ME2");
  }
}

module.exports = GusthasScepter;
