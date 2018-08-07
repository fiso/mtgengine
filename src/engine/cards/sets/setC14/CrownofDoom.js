"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofDoom extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of Doom", "Commander 2014", "C14");
  }
}

module.exports = CrownofDoom;
