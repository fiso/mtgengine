"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JointAssault extends Card {
  constructor(game) {
    super(game, "Joint Assault", "Avacyn Restored", "AVR");
  }
}

module.exports = JointAssault;
