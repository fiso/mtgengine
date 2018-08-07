"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BigBoaConstrictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Big Boa Constrictor", "Unstable", "UST");
  }
}

module.exports = BigBoaConstrictor;
