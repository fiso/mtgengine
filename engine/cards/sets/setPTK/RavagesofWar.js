"use strict";
const Constants = require ("../../../Constants");
const RavagesofWarBase = require("../setME2/RavagesofWar");

class RavagesofWar extends RavagesofWarBase {
  constructor(game) {
    super(game, "Ravages of War", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RavagesofWar;
