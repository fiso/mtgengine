"use strict";
const Constants = require ("../../../Constants");
const ElderCatharBase = require("../setDDQ/ElderCathar");

class ElderCathar extends ElderCatharBase {
  constructor (game) {
    super(game, "Elder Cathar", "Innistrad", "ISD");
  }
}

module.exports = ElderCathar;
