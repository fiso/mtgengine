"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CathedralMembrane extends UnimplementedCard {
  constructor(game) {
    super(game, "Cathedral Membrane", "New Phyrexia", "NPH");
  }
}

module.exports = CathedralMembrane;
