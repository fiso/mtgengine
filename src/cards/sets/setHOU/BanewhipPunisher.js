"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanewhipPunisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Banewhip Punisher", "Hour of Devastation", "HOU");
  }
}

module.exports = BanewhipPunisher;
