"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shatterstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Shatterstorm", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Shatterstorm;
