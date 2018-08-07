"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisageofBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Visage of Bolas", "Hour of Devastation", "HOU");
  }
}

module.exports = VisageofBolas;
