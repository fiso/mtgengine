"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentRecruit extends UnimplementedCard {
  constructor (game) {
    super(game, "Ardent Recruit", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ArdentRecruit;
