"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvidReclaimer extends UnimplementedCard {
  constructor (game) {
    super(game, "Avid Reclaimer", "Hour of Devastation", "HOU");
  }
}

module.exports = AvidReclaimer;
