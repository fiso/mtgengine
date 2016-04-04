"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DystopiaBase = require("../setALL/Dystopia.js");

class Dystopia extends DystopiaBase {
  constructor(game) {
    super(game, "Dystopia", "Masters Edition II", "ME2");
  }
}

module.exports = Dystopia;
