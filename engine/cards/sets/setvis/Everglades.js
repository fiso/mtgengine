"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvergladesBase = require("../setC14/Everglades.js");

class Everglades extends EvergladesBase {
  constructor(game) {
    super(game, "Everglades", "Visions", "VIS");
  }
}

module.exports = Everglades;
