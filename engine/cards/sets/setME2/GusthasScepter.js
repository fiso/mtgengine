"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GusthasScepterBase = require("../setALL/GusthasScepter.js");

class GusthasScepter extends GusthasScepterBase {
  constructor(game) {
    super(game, "Gustha's Scepter", "Masters Edition II", "ME2");
  }
}

module.exports = GusthasScepter;
