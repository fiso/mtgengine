"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GempalmAvengerBase = require("../setDDO/GempalmAvenger.js");

class GempalmAvenger extends GempalmAvengerBase {
  constructor(game) {
    super(game, "Gempalm Avenger", "Legions", "LGN");
  }
}

module.exports = GempalmAvenger;
