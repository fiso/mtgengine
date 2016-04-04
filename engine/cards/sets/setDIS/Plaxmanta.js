"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlaxmantaBase = require("../setC15/Plaxmanta.js");

class Plaxmanta extends PlaxmantaBase {
  constructor(game) {
    super(game, "Plaxmanta", "Dissension", "DIS");
  }
}

module.exports = Plaxmanta;
