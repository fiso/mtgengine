"use strict";
const Constants = require ("../../../Constants");
const PrincessLucreziaBase = require("../setLEG/PrincessLucrezia");

class PrincessLucrezia extends PrincessLucreziaBase {
  constructor (game) {
    super(game, "Princess Lucrezia", "Masters Edition III", "ME3");
  }
}

module.exports = PrincessLucrezia;
