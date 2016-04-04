"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EateroftheDeadBase = require("../setMED/EateroftheDead.js");

class EateroftheDead extends EateroftheDeadBase {
  constructor(game) {
    super(game, "Eater of the Dead", "The Dark", "DRK");
  }
}

module.exports = EateroftheDead;
