"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FugitiveWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Fugitive Wizard", "Magic 2015", "M15");
  }
}

module.exports = FugitiveWizard;
