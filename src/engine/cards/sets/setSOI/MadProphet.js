"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadProphet extends UnimplementedCard {
  constructor (game) {
    super(game, "Mad Prophet", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MadProphet;
