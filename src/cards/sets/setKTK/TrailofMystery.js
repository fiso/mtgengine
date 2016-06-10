"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrailofMystery extends UnimplementedCard {
  constructor (game) {
    super(game, "Trail of Mystery", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrailofMystery;
