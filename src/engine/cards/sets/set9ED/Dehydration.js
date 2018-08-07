"use strict";
const Constants = require ("../../../Constants");
const DehydrationBase = require("../set10E/Dehydration");

class Dehydration extends DehydrationBase {
  constructor (game) {
    super(game, "Dehydration", "Ninth Edition", "9ED");
  }
}

module.exports = Dehydration;
