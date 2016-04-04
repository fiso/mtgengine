"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChokeBase = require("../set8ED/Choke.js");

class Choke extends ChokeBase {
  constructor(game) {
    super(game, "Choke", "Tempest", "TMP");
  }
}

module.exports = Choke;
