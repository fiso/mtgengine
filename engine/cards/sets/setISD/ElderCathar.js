"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElderCatharBase = require("../setDDQ/ElderCathar.js");

class ElderCathar extends ElderCatharBase {
  constructor(game) {
    super(game, "Elder Cathar", "Innistrad", "ISD");
  }
}

module.exports = ElderCathar;
