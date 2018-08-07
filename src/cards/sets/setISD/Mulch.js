"use strict";
const Constants = require ("../../../Constants");
const MulchBase = require("../setCMA/Mulch");

class Mulch extends MulchBase {
  constructor (game) {
    super(game, "Mulch", "Innistrad", "ISD");
  }
}

module.exports = Mulch;
