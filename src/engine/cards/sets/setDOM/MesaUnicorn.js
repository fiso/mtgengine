"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Unicorn", "Dominaria", "DOM");
  }
}

module.exports = MesaUnicorn;
