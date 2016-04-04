"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavagesofWarBase = require("../setME2/RavagesofWar.js");

class RavagesofWar extends RavagesofWarBase {
  constructor(game) {
    super(game, "Ravages of War", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RavagesofWar;
