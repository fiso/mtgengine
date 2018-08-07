"use strict";
const Constants = require ("../../../Constants");
const EnormousBalothBase = require("../setM10/EnormousBaloth");

class EnormousBaloth extends EnormousBalothBase {
  constructor (game) {
    super(game, "Enormous Baloth", "Legions", "LGN");
  }
}

module.exports = EnormousBaloth;
