"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StanggBase = require("../setCHR/Stangg.js");

class Stangg extends StanggBase {
  constructor(game) {
    super(game, "Stangg", "Legends", "LEG");
  }
}

module.exports = Stangg;
