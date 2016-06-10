"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrumblingVestige extends UnimplementedCard {
  constructor (game) {
    super(game, "Crumbling Vestige", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CrumblingVestige;
