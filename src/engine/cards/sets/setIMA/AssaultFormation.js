"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultFormation extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault Formation", "Iconic Masters", "IMA");
  }
}

module.exports = AssaultFormation;
