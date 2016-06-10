"use strict";
const Constants = require ("../../../Constants");
const EnormousBalothBase = require("../set8ED/EnormousBaloth");

class EnormousBaloth extends EnormousBalothBase {
  constructor (game) {
    super(game, "Enormous Baloth", "Ninth Edition", "9ED");
  }
}

module.exports = EnormousBaloth;
