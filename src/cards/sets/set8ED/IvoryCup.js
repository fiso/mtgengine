"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryCup extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Cup", "Eighth Edition", "8ED");
  }
}

module.exports = IvoryCup;
