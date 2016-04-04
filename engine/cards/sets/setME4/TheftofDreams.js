"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheftofDreamsBase = require("../setEXO/TheftofDreams.js");

class TheftofDreams extends TheftofDreamsBase {
  constructor(game) {
    super(game, "Theft of Dreams", "Masters Edition IV", "ME4");
  }
}

module.exports = TheftofDreams;
