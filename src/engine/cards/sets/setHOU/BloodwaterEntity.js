"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodwaterEntity extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodwater Entity", "Hour of Devastation", "HOU");
  }
}

module.exports = BloodwaterEntity;
