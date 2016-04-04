"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofEmpires extends Card {
  constructor(game) {
    super(game, "Crown of Empires", "Magic 2012", "M12");
  }
}

module.exports = CrownofEmpires;
