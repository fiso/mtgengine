"use strict";
const Constants = require ("../../../Constants");
const EnormousBalothBase = require("../set8ED/EnormousBaloth");

class EnormousBaloth extends EnormousBalothBase {
  constructor(game) {
    super(game, "Enormous Baloth", "Magic 2010", "M10");
  }
}

module.exports = EnormousBaloth;
