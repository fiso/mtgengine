"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CocoonBase = require("../setCHR/Cocoon.js");

class Cocoon extends CocoonBase {
  constructor(game) {
    super(game, "Cocoon", "Legends", "LEG");
  }
}

module.exports = Cocoon;
