"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertoftheFervent extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert of the Fervent", "Hour of Devastation", "HOU");
  }
}

module.exports = DesertoftheFervent;
