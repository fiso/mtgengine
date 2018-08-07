"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wellwisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Wellwisher", "Commander Anthology", "CMA");
  }
}

module.exports = Wellwisher;
