"use strict";
const Constants = require ("../../../Constants");
const DehydrationBase = require("../set10E/Dehydration");

class Dehydration extends DehydrationBase {
  constructor (game) {
    super(game, "Dehydration", "Eighth Edition", "8ED");
  }
}

module.exports = Dehydration;
