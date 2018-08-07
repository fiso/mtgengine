"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeirdedVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Weirded Vampire", "Eldritch Moon", "EMN");
  }
}

module.exports = WeirdedVampire;
