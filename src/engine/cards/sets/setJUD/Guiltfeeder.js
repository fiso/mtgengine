"use strict";
const Constants = require ("../../../Constants");
const GuiltfeederBase = require("../setC16/Guiltfeeder");

class Guiltfeeder extends GuiltfeederBase {
  constructor (game) {
    super(game, "Guiltfeeder", "Judgment", "JUD");
  }
}

module.exports = Guiltfeeder;
