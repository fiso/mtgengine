"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KilnFiendBase = require("../setDDJ/KilnFiend.js");

class KilnFiend extends KilnFiendBase {
  constructor(game) {
    super(game, "Kiln Fiend", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KilnFiend;
