"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarCollapse extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Collapse", "Urza's Legacy", "ULG");
  }
}

module.exports = PlanarCollapse;
