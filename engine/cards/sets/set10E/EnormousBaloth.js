"use strict";
const Constants = require ("../../../Constants");
const EnormousBalothBase = require("../set8ED/EnormousBaloth");

class EnormousBaloth extends EnormousBalothBase {
  constructor(game) {
    super(game, "Enormous Baloth", "Tenth Edition", "10E");
  }
}

module.exports = EnormousBaloth;
