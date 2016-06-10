"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FugitiveWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Fugitive Wizard", "Eighth Edition", "8ED");
  }
}

module.exports = FugitiveWizard;
