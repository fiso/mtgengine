"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CranialArchive extends UnimplementedCard {
  constructor(game) {
    super(game, "Cranial Archive", "Khans of Tarkir", "KTK");
  }
}

module.exports = CranialArchive;
