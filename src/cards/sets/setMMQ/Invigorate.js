"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setDD3_GVL/Invigorate");

class Invigorate extends InvigorateBase {
  constructor(game) {
    super(game, "Invigorate", "Mercadian Masques", "MMQ");
  }
}

module.exports = Invigorate;
