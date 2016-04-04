"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PurelaceBase = require("../setCED/Purelace.js");

class Purelace extends PurelaceBase {
  constructor(game) {
    super(game, "Purelace", "Limited Edition Beta", "LEB");
  }
}

module.exports = Purelace;
