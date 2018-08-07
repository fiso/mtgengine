"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedCerodon extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilded Cerodon", "Hour of Devastation", "HOU");
  }
}

module.exports = GildedCerodon;
