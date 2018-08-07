"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeforanEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye for an Eye", "Masters Edition IV", "ME4");
  }
}

module.exports = EyeforanEye;
