"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertoftheIndomitable extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert of the Indomitable", "Hour of Devastation", "HOU");
  }
}

module.exports = DesertoftheIndomitable;
