"use strict";
const Constants = require ("../../../Constants");
const ExtinguishBase = require("../setPO2/Extinguish");

class Extinguish extends ExtinguishBase {
  constructor (game) {
    super(game, "Extinguish", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Extinguish;
