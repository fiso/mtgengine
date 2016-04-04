"use strict";
const Constants = require ("../../../Constants");
const TheftofDreamsBase = require("../setEXO/TheftofDreams");

class TheftofDreams extends TheftofDreamsBase {
  constructor(game) {
    super(game, "Theft of Dreams", "Masters Edition IV", "ME4");
  }
}

module.exports = TheftofDreams;
