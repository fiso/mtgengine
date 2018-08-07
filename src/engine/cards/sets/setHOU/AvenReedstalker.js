"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenReedstalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Reedstalker", "Hour of Devastation", "HOU");
  }
}

module.exports = AvenReedstalker;
