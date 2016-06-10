"use strict";
const Constants = require ("../../../Constants");
const ChokeBase = require("../set8ED/Choke");

class Choke extends ChokeBase {
  constructor (game) {
    super(game, "Choke", "Tempest", "TMP");
  }
}

module.exports = Choke;
