"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GorillaChieftainBase = require("../setALL/GorillaChieftain.js");

class GorillaChieftain extends GorillaChieftainBase {
  constructor(game) {
    super(game, "Gorilla Chieftain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GorillaChieftain;
