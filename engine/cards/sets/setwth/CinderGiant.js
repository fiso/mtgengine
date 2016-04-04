"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderGiant extends Card {
  constructor(game) {
    super(game, "Cinder Giant", "Weatherlight", "WTH");
  }
}

module.exports = CinderGiant;
