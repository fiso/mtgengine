"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NooseConstrictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Noose Constrictor", "Friday Night Magic 2017", "F17");
  }
}

module.exports = NooseConstrictor;
