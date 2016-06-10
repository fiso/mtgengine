"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiWindscout extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeskai Windscout", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiWindscout;
