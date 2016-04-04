"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FamineBase = require("../setC13/Famine.js");

class Famine extends FamineBase {
  constructor(game) {
    super(game, "Famine", "Masters Edition III", "ME3");
  }
}

module.exports = Famine;
