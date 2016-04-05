"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcyBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Icy Blast", "Khans of Tarkir", "KTK");
  }
}

module.exports = IcyBlast;
