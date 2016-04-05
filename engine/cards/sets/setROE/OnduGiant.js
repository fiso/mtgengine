"use strict";
const Constants = require ("../../../Constants");
const OnduGiantBase = require("../setDDP/OnduGiant");

class OnduGiant extends OnduGiantBase {
  constructor(game) {
    super(game, "Ondu Giant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OnduGiant;
