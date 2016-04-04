"use strict";
const Constants = require ("../../../Constants");
const BeastsofBogardanBase = require("../setCHR/BeastsofBogardan");

class BeastsofBogardan extends BeastsofBogardanBase {
  constructor(game) {
    super(game, "Beasts of Bogardan", "Legends", "LEG");
  }
}

module.exports = BeastsofBogardan;
