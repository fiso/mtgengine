"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildofAlara extends UnimplementedCard {
  constructor (game) {
    super(game, "Child of Alara", "From the Vault: Annihilation", "V14");
  }
}

module.exports = ChildofAlara;
