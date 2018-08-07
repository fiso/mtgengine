"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArvadtheCursed extends UnimplementedCard {
  constructor (game) {
    super(game, "Arvad the Cursed", "Dominaria", "DOM");
  }
}

module.exports = ArvadtheCursed;
