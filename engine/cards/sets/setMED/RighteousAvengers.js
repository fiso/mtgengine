"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousAvengersBase = require("../setLEG/RighteousAvengers.js");

class RighteousAvengers extends RighteousAvengersBase {
  constructor(game) {
    super(game, "Righteous Avengers", "Masters Edition", "MED");
  }
}

module.exports = RighteousAvengers;
