"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndHostilities extends UnimplementedCard {
  constructor(game) {
    super(game, "End Hostilities", "Khans of Tarkir", "KTK");
  }
}

module.exports = EndHostilities;
