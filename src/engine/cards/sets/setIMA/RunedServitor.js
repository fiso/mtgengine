"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunedServitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Runed Servitor", "Iconic Masters", "IMA");
  }
}

module.exports = RunedServitor;
