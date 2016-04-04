"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofEmpires extends UnimplementedCard {
  constructor(game) {
    super(game, "Crown of Empires", "Magic 2012", "M12");
  }
}

module.exports = CrownofEmpires;
