"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AssaultBase = require("../setINV/Assault.js");

class Assault extends AssaultBase {
  constructor(game) {
    super(game, "Assault", "Planechase", "HOP");
  }
}

module.exports = Assault;
