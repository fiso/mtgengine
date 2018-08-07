"use strict";
const Constants = require ("../../../Constants");
const RavagesofWarBase = require("../setJ15/RavagesofWar");

class RavagesofWar extends RavagesofWarBase {
  constructor (game) {
    super(game, "Ravages of War", "Magic Online Promos", "PRM");
  }
}

module.exports = RavagesofWar;
