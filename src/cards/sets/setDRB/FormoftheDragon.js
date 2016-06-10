"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FormoftheDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Form of the Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = FormoftheDragon;
