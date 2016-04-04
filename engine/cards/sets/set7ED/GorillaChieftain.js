"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GorillaChieftainBase = require("../setALL/GorillaChieftain.js");

class GorillaChieftain extends GorillaChieftainBase {
  constructor(game) {
    super(game, "Gorilla Chieftain", "Seventh Edition", "7ED");
  }
}

module.exports = GorillaChieftain;
