"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setDD3_GVL/Invigorate");

class Invigorate extends InvigorateBase {
  constructor (game) {
    super(game, "Invigorate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Invigorate;
