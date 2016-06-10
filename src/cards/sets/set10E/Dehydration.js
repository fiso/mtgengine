"use strict";
const Constants = require ("../../../Constants");
const DehydrationBase = require("../set8ED/Dehydration");

class Dehydration extends DehydrationBase {
  constructor (game) {
    super(game, "Dehydration", "Tenth Edition", "10E");
  }
}

module.exports = Dehydration;
