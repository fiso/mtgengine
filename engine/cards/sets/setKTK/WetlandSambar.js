"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WetlandSambar extends UnimplementedCard {
  constructor(game) {
    super(game, "Wetland Sambar", "Khans of Tarkir", "KTK");
  }
}

module.exports = WetlandSambar;
