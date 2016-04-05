"use strict";
const Constants = require ("../../../Constants");
const EvergladesBase = require("../setC14/Everglades");

class Everglades extends EvergladesBase {
  constructor(game) {
    super(game, "Everglades", "Visions", "VIS");
  }
}

module.exports = Everglades;
