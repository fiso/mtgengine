"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrincessLucreziaBase = require("../setLEG/PrincessLucrezia.js");

class PrincessLucrezia extends PrincessLucreziaBase {
  constructor(game) {
    super(game, "Princess Lucrezia", "Masters Edition III", "ME3");
  }
}

module.exports = PrincessLucrezia;
