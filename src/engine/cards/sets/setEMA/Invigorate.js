"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setA25/Invigorate");

class Invigorate extends InvigorateBase {
  constructor (game) {
    super(game, "Invigorate", "Eternal Masters", "EMA");
  }
}

module.exports = Invigorate;
