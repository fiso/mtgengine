"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NooseConstrictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Noose Constrictor", "Eldritch Moon", "EMN");
  }
}

module.exports = NooseConstrictor;
