"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventPaincaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Fervent Paincaster", "Hour of Devastation", "HOU");
  }
}

module.exports = FerventPaincaster;
