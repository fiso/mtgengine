"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Cinder Giant", "Weatherlight", "WTH");
  }
}

module.exports = CinderGiant;
