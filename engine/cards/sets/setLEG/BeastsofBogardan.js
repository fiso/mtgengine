"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastsofBogardanBase = require("../setCHR/BeastsofBogardan.js");

class BeastsofBogardan extends BeastsofBogardanBase {
  constructor(game) {
    super(game, "Beasts of Bogardan", "Legends", "LEG");
  }
}

module.exports = BeastsofBogardan;
