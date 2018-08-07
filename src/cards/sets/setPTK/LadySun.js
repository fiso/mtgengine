"use strict";
const Constants = require ("../../../Constants");
const LadySunBase = require("../setPZ2/LadySun");

class LadySun extends LadySunBase {
  constructor (game) {
    super(game, "Lady Sun", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LadySun;
