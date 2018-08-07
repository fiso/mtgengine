"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MycoidShepherd extends UnimplementedCard {
  constructor (game) {
    super(game, "Mycoid Shepherd", "Magic 2010 Promos", "PM10");
  }
}

module.exports = MycoidShepherd;
