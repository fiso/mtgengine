"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkMesmerist extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Mesmerist", "Magic 2012", "M12");
  }
}

module.exports = MerfolkMesmerist;
