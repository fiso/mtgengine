"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndermineBase = require("../setDDH/Undermine.js");

class Undermine extends UndermineBase {
  constructor(game) {
    super(game, "Undermine", "Invasion", "INV");
  }
}

module.exports = Undermine;
