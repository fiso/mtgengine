"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MinionofLeshracBase = require("../setICE/MinionofLeshrac.js");

class MinionofLeshrac extends MinionofLeshracBase {
  constructor(game) {
    super(game, "Minion of Leshrac", "Masters Edition II", "ME2");
  }
}

module.exports = MinionofLeshrac;
