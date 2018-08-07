"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setA25/Invigorate");

class Invigorate extends InvigorateBase {
  constructor (game) {
    super(game, "Invigorate", "Commander 2011", "CMD");
  }
}

module.exports = Invigorate;
