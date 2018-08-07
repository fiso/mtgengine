"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeeroftheLastTomorrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Seer of the Last Tomorrow", "Hour of Devastation", "HOU");
  }
}

module.exports = SeeroftheLastTomorrow;
