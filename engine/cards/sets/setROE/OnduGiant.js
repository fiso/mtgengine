"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OnduGiantBase = require("../setDDP/OnduGiant.js");

class OnduGiant extends OnduGiantBase {
  constructor(game) {
    super(game, "Ondu Giant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OnduGiant;
